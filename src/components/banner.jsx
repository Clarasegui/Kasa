import '../styles/banner.css';
import KasaBannerImg from '../assets/banner.png';

function Banner() {
  return (
    <div className="banner-container">
      <img src={KasaBannerImg} alt="Kasa banner" className="banner-img" />
        <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
