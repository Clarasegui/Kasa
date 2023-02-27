import '../styles/banner.css';
import KasaHomeBannerImg from '../assets/home_banner.png';
import KasaAboutBannerImg from '../assets/about_banner.png';
import { useLocation } from 'react-router-dom';

function Banner() {
  const location = useLocation();

  if (location.pathname === '/a-propos') {
    return (
      <div className="banner-container">
        <img
          src={KasaAboutBannerImg}
          alt="Bannnière Kase - A propos"
          className="about-banner-img"
        />
      </div>
    );
  }

  return (
    <div className="banner-container">
      <img
        src={KasaHomeBannerImg}
        alt="Bannière Kasa - Home"
        className="home-banner-img"
      />
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
