import '../styles/header.css';
import Logo from '../assets/logo_header.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="kasa-header">
      <h1>
        <img src={Logo} alt="Logo de Kasa" className="header-logo" />
      </h1>
      <nav>
        <ul>
          <li className="nav-li">
            <Link to="/">Accueil</Link>
          </li>
          <li className="nav-li">
            <Link to="/a-propos">A propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
