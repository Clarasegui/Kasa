import '../styles/home.css';
import Header from '../components/header';
import KasaBanner from '../components/banner';
import Gallery from '../components/gallery';
import Footer from '../components/footer';

function home() {
  return (
    <div className="home-container">
    <Header />
    <KasaBanner />
    <Gallery />
    <Footer />
    </div>
  );
}

export default home;
