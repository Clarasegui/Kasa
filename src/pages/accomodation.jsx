import { Navigate, useParams } from 'react-router-dom';
import '../styles/accomodation.css';
import '../styles/collapse.css';
import Datas from '../data/data';
import Header from '../components/header';
import SlideShow from '../components/slideshow';
import Collapse from '../components/collapse';
import Footer from '../components/footer';
import GreyStar from '../assets/star_grey.png';
import RedStar from '../assets/star_red.png';

function Accomodation() {
  const idInURL = useParams('id').id;
  const AccomodationID = Datas.filter(
    (accomodation) => accomodation.id === idInURL
  );

  if (AccomodationID.length === 0) {
    return <Navigate to="not-found" replace={true} />;
  }

  const name = AccomodationID[0].host.name.split(' ');
  const rating = AccomodationID[0].rating;
  const description = AccomodationID[0].description;
  const equipments = AccomodationID[0].equipments;
  const pictures = AccomodationID[0].pictures;

  return (
    <div>
      <Header />
      <SlideShow imageSlider={pictures} />
      <main className="accomodation">
        <div className="accomodation-content">
          <div className="accomodation-infos">
            <h1 className="accomodation-title">{AccomodationID[0].title}</h1>
            <p className="accomodation-location">
              {AccomodationID[0].location}
            </p>
            <div>
              {AccomodationID[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="accomodation-content-host-container">
            <div className="accomodation-content-stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    className="rating-stars"
                    key={index}
                    src={ratingValue <= rating ? RedStar : GreyStar}
                    alt="star"
                  />
                );
              })}
            </div>
            <div className="accomodation-content-host">
              <div className="accomodation-content-host-name">
                <p>{name[0]}</p>
                <p>{name[1]}</p>
              </div>
              <img
                className="host-picture"
                src={AccomodationID[0].host.picture}
                alt="Host of this accomodation"
              />
            </div>
          </div>
        </div>
        <div className="collapses">
          <Collapse
            title={'Description'}
            content={description}
            className="small-collapse-container"
          />
          <Collapse
            title={'??quipements'}
            content={equipments}
            className="small-collapse-container"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Accomodation;
