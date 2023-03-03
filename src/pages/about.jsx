import Header from '../components/header';
import KasaBanner from '../components/banner';
import Collapse from '../components/collapse';
import Footer from '../components/footer';
import AboutDatas from '../data/about.js';

function about() {
  return (
    <div>
      <Header />
      <KasaBanner />
      <main className="about-container">
        {AboutDatas.map((data) => {
          return (
            <div key={data.id} className="about-collapse">
              <Collapse
                title={data.title}
                content={data.content}
              />
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default about;
