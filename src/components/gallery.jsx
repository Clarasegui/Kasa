import '../styles/gallery.css';
import Datas from '../data/data';
import Cards from '../components/cards';

function Gallery() {
  return (
    <main className="gallery-container">
      {Datas.map((data) => {
        return (
          <Cards
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </main>
  );
}

export default Gallery;
