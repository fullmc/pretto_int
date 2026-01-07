import './App.css'
import cellular from './assets/cellular.svg'
import wifi from './assets/Wifi.svg'
import battery from './assets/Battery.svg'

function App() {

  return (
    <>
      <header className="app-header">
        <div className="time">9:41</div>
        <div className="status-icons">
          <img src={cellular} alt="Cellular signal" />
          <img src={wifi} alt="WiFi signal" />
          <img src={battery} alt="Battery level" />
        </div>
      </header>
    </>
  )
}

export default App
