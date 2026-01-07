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
      
      <section>
        <div className="prepare-project">
          <h1>Préparez votre projet en toute facilité</h1>
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
        <img src={hero} alt="Hero" />
      </section>
    </>
  )
}

export default App
