import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../components/Header.tsx'
import logo from '../assets/Logo_dark.svg'
import menu from '../assets/Bars.svg'
import home from '../assets/House.svg'
import tune from '../assets/Tune.svg'
import question from '../assets/QuestionMarkCircle.svg'
import profile from '../assets/Avatar.svg'
import chevronDown from '../assets/ChevronDownBold.svg'
import cellular from '../assets/cellular.svg'
import wifi from '../assets/Wifi.svg'
import battery from '../assets/Battery.svg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
        <Link to="/">
          <img src={logo} alt="Pretto Logo" className="logo"/>
        </Link>
        <div className="nav-items">
          <Link to="/" className="nav-item">
            <img src={home} alt="Home" />
            <span>Tableau de bord</span>
          </Link>
          <div className="nav-item">
            <img src={tune} alt="Simulation" />
            <span>Simulation</span>
          </div>
          <div className="nav-item">
            <img src={question} alt="Question" />
          </div>
          <div className="menu">
            <img 
              src={menu} 
              alt="Menu" 
              className="menu-icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <div 
              className="profile-info"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img src={profile} alt="Profile"/>
              <p>prelead@pretto.fr</p>
              <img src={chevronDown} alt="chevron down" className="chevron-down"/>
            </div>
            {isMenuOpen && (
              <div className="dropdown-menu">
                <Link 
                  to="/alert-settings" 
                  className="dropdown-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Paramétrer mes alertes
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}
export default Header;