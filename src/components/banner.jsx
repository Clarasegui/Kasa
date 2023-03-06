import '../styles/banner.css';

function Banner({ image, className }) {
  return (
    <div className="banner-container">
      <img src={image} alt="Bannière Kasa - Home" className="banner-img" />
      <h2 className={className}>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
