import '../styles/error.css';
import { NavLink } from "react-router-dom";

function Error404() {
  return (
  <div className="error-container">
    <h1 className="error-title">404</h1>
    <span className="error-description">
      Oups! La page que vous demandez n'existe pas.
    </span>
    <div className="error-link-back-container">
    <NavLink to="/" className="error-link-back">
      Retourner sur la page d’accueil
    </NavLink>
    </div>
  </div>
  );
}

export default Error404;
