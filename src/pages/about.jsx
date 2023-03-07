import '../styles/banner.css';
import Header from '../components/header';
import Banner from '../components/banner';
import Collapse from '../components/collapse';
import Footer from '../components/footer';
import AboutDatas from '../data/about.js';
import aboutBannerImage from '../assets/about_banner.png';

function About() {
  return (
    <div>
      <Header />
      <Banner
       image={aboutBannerImage} 
       className="h2-about"/>
      <main className="about-container">
        {AboutDatas.map((data) => {
          return (
            <div key={data.id} className="about-collapse">
              <Collapse
                title={data.title}
                content={data.content}
                className="collapse-container"
              />
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default About;
