import '../styles/footer.css'
import Logo from '../assets/logo_footer.png'

function Footer() {
    return (
      <div className="footer-container">
        <img src={Logo} alt="Logo de Kasa" className="footer-logo"/>
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </div>
    );
}

export default Footer;