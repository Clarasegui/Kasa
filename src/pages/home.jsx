import '../styles/home.css';
import Header from '../components/header';
import KasaBanner from '../components/banner';
import Gallery from '../components/gallery';

function home() {
  return (
    <div className="home-container">
    <Header />
    <KasaBanner />
    <Gallery />
    </div>
  );
}

export default home;
