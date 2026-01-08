import Header from "./components/Header";
import './AlertSettings.css'
import Checkbox from "./components/Checkbox";

function AlertSettings() {
  return (
    <>
      <Header />
      <main className="alert-page">
        <section className="alert-form">
          <h1>Paramétrez votre alerte</h1>
          
          <div className="form-content">
            <div className="form-section">
              <h5>Localisation</h5>
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
