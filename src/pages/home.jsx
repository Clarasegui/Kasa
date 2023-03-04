import '../styles/home.css';
import Header from '../components/header';
import Banner from '../components/banner';
import Gallery from '../components/gallery';
import Footer from '../components/footer';
import homeBannerImage from '../assets/home_banner.png';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Banner image={homeBannerImage} />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
