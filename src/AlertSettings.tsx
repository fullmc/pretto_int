import { useState } from "react";
import Header from "./components/Header";
import './AlertSettings.css'
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import CitySelector from "./components/SelectCity";
import type { ICity } from "./types/city";

function AlertSettings() {
  const [cities, setCities] = useState<ICity[]>(
    [
      { label: 'Lyon', postcode: '69007' }
    ])
  const [propertyType, setPropertyType] = useState({
    flat: true,
    house: false
  })
  const [saleType, setSaleType] = useState<'new' | 'old' | undefined>(undefined)

  const handleAddCity = (city: ICity) => {
    setCities([...cities, city])
  }

  const handleRemoveCity = (city: ICity) => {
    setCities(cities.filter((c) => c.postcode !== city.postcode))
  }

  const handleUpdateAlert = () => {
    setCities([])
    setPropertyType({ flat: false, house: false })
    setSaleType(undefined)
  }

  return (
    <>
      <Header />
      <main className="alert-page">
        <section className="alert-form">
          <h1>Paramétrez votre alerte</h1>
          
          <div className="form-content">
            <div className="form-section">
              <h5>Localisation</h5>
            <CitySelector
              cities={cities}
              onAddCity={handleAddCity}
              onRemoveCity={handleRemoveCity}
            />
            </div>
            <div className="form-section">
              <h5>Type de bien</h5>
              <Checkbox
                id="flat"
                label="Appartement"
                checked={propertyType.flat}
                onChange={(e) => setPropertyType({ ...propertyType, flat: e.target.checked })}
              />
              <Checkbox
                id="house"
                label="Maison"
                checked={propertyType.house}
                onChange={(e) => setPropertyType({ ...propertyType, house: e.target.checked })}
              />
            </div>
            <div className="form-section">
              <h5>Type de vente</h5>
              <Radio
                id="neuf"
                name="saleType"
                label="Neuf"
                value="new"
                checked={saleType === 'new'}
                onChange={(e) => setSaleType(e.target.value as "new")}
              />
              <Radio
                id="old"
                name="saleType"
                label="Ancien"
                value="old"
                checked={saleType === 'old'}
                onChange={(e) => setSaleType(e.target.value as "old")}
              />
            </div>
          </div>
          <div className="form-buttons"> 
            <button className="save-btn" onClick={() => {handleUpdateAlert(); alert('Alerte enregistrée !')}}>
              Enregistrer
            </button>
            <button className="delete-btn" onClick={() => {handleUpdateAlert(); alert('Alerte supprimée !')}}>
              Supprimer l'alerte
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
export default AlertSettings;
