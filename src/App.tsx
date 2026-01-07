import './App.css'
import cellular from './assets/cellular.svg'
import wifi from './assets/Wifi.svg'
import battery from './assets/Battery.svg'
import logo from './assets/Logo_dark.svg'
import menu from './assets/Bars.svg'

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
    </>
  )
}

export default App
