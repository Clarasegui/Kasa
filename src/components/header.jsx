import '../styles/header.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


function Header() {
    return (
      <div className="kasa-header">
        <h1>
          <img src={logo} alt="Kasa logo" className="kasa-logo" />
        </h1>
        <nav>
          <ul>
            <li className="nav-li">
              <Link to="/">Accueil</Link>
            </li>
            <li className="nav-li">
              <Link to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Header