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

  const handleAddCity = (city: ICity) => {
    setCities([...cities, city])
  }

  const handleRemoveCity = (city: ICity) => {
    setCities(cities.filter((c) => c.postcode !== city.postcode))
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
                id="appartement"
                label="Appartement"
              />
              <Checkbox
                id="maison"
                label="Maison"
              />
            </div>
            <div className="form-section">
              <h5>Type de vente</h5>
              <Radio
                id="neuf"
                name="saleType"
                label="Neuf"
              />
              <Radio
                id="ancien"
                name="saleType"
                label="Ancien"
              />
            </div>
          </div>
          <div className="form-buttons">
            <button className="save-btn">
              Enregistrer
            </button>
            <button className="delete-btn">
              Supprimer l'alerte
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
export default AlertSettings;
