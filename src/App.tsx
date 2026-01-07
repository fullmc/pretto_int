import './App.css'
import cellular from './assets/cellular.svg'
import wifi from './assets/Wifi.svg'
import battery from './assets/Battery.svg'
import logo from './assets/Logo_dark.svg'
import menu from './assets/Bars.svg'
import calculator from './assets/calculator.svg'
import coins from './assets/coins.svg'
import chevron from './assets/ChevronRightBold.svg'
import hero from './assets/Image1.svg'
import check from './assets/CheckBoldMini.svg'
import model from './assets/Img.svg'


function App() {

  return (
    <>
      <header>
        <div className="status-bar">
          <div className="time">9:41</div>
          <div className="status-icons">
            <img src={cellular} alt="Cellular signal" />
            <img src={wifi} alt="WiFi signal" />
            <img src={battery} alt="Battery level" />
          </div>
        </div>

        <nav>
          <img src={logo} alt="Pretto Logo" />
          <div className="menu">
            <img src={menu} alt="Menu" />
          </div>
        </nav>
      </header>
      
      <main>
        <section>
          <h1>Préparez votre projet en toute facilité</h1>
          <div className="prepare-project">
            <div>
              <p>Vous aimeriez savoir quel crédit vous pourriez obtenir pour votre projet ? Nos simulateurs sont connectés à un algorithme unique sur le marché nous permettant de connaître avec précision les offres des banques et d’identifier la meilleure pour vous.</p>
              <div className="buttons">
                <button>
                  <div>
                    <img src={calculator} alt="Calculator" />
                    <p>Simuler mon prêt</p>
                  </div>
                  <img src={chevron} alt="Chevron right" />
                </button>
                <button>
                  <div>
                    <img src={coins} alt="Coins" />
                    <p>Simuler mon rachat</p>
                  </div>
                  <img src={chevron} alt="Chevron right" />
                </button>
              </div>
            </div>
            <img src={hero} alt="Hero" className="hero-image"/>
          </div>
        </section>

        <section>
          <div className="finance">
            <h1>Votre attestation de financement</h1>
            <p>Les biens de qualité reçoivent beaucoup d’offres. L’attestation de financement Pretto certifie au vendeur de votre capacité d’achat. De quoi le rassurer et mettre toutes les chances de votre côté.</p>
            <div className="info-boxes">
              <div className="info-box">
                <div>
                  <img src={check} alt="" />
                  <p>Gratuite</p>
                </div>
                <p>Elle est incluse dans notre pack d’outils et services gratuits, et sans engagement !</p>
              </div>
              <div className="info-box">
                <div>
                  <img src={check} alt="" />
                  <p>Rapide</p>
                </div>
                <p>Recevez votre attestation en 24h, après dépôt de vos justificatifs et échange avec votre courtier.</p>
              </div>
              <div className="info-box">
                <div>
                  <img src={check} alt="" />
                  <p>Rassurante</p>
                </div>
                <p>Destinée au vendeur, elle détaille de façon transparente votre projet de financement.</p>
              </div>
            </div>
            <button className="attestation-button">Obtenir mon attestation</button>
            <img src={model} alt="Model" className="model-image"/> 
          </div>
        </section>
      </main>
    </>
  )
}

export default App
