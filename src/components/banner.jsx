import '../styles/banner.css';

function Banner({ image }) {
  return (
    <div className="banner-container">
      <img src={image} alt="Bannière Kasa - Home" className="banner-img" />
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
