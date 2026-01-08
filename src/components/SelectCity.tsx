import { useState } from 'react'
import { searchPlaces } from '@pretto/places'
import type { ICity, ICitySelector } from '../types/city'
import './SelectCity.css'

function CitySelector({ cities, onAddCity, onRemoveCity }: ICitySelector) {
  const [isSearching, setIsSearching] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [suggestions, setSuggestions] = useState<ICity[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearchChange = async (value: string) => {
    setSearchValue(value)

    if (value.length < 2) {
      setSuggestions([])
      return
    }

    setIsLoading(true)
    
    try {
      const results = await searchPlaces(value, {}, ['city'])
      const newSuggestions = results.map(result => ({
        label: result.value.city,
        postcode: result.value.zipcode
      }))
      setSuggestions(newSuggestions)
    } catch (error) {
      console.error('Erreur:', error)
      setSuggestions([])
    }
    
    setIsLoading(false)
  }

  const handleSelectCity = (city: ICity) => {
    onAddCity(city)
    setSearchValue('')
    setSuggestions([])
    setIsSearching(false)
  }

  const handleCancel = () => {
    setSearchValue('')
    setSuggestions([])
    setIsSearching(false)
  }

  return (
    <div className="city-selector">

      <div className="cities-list">
        {cities.map((city, i) => (
          <div key={i} className="city-tag">
            <span>{city.label} ({city.postcode})</span>
            <button
              type="button"
              onClick={() => onRemoveCity(city)}
              className="remove-city"
              aria-label="Supprimer la ville"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {isSearching ? (
        <div className="city-search-wrapper">

          <div className="search-input-wrapper">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Rechercher une ville..."
              className="city-search-input"
              autoFocus
            />
            <button
              type="button"
              onClick={handleCancel}
              className="clear-search"
              aria-label="Effacer"
            >
              ×
            </button>
          </div>

          {isLoading && <div className="loading">Recherche...</div>}

          {suggestions.length > 0 && (
            <div className="suggestions-dropdown">
              {suggestions.map((suggestion, i) => (
                <div
                  key={i}
                  className="suggestion-item"
                  onClick={() => handleSelectCity(suggestion)}
                >
                  {suggestion.label} ({suggestion.postcode})
                </div>
              ))}
            </div>
          )}
          
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsSearching(true)}
          className="add-city-btn"
        >
          Ajouter
        </button>
      )}
    </div>
  )
}

export default CitySelector
