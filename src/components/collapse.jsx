import '../styles/collapse.css';
import Arrow from '../assets/arrow_up_down.png';
import { useState } from 'react';

function Collapse({ title, content, currentWidth, currentMargin }) {
  const [toggle, setToggle] = useState(false);
  return (
    <main
      className="collapse-container collapse-container-accomodation"
      style={{ margin: currentMargin, width: currentWidth }}
    >
      <div className="collapse-title-container collapse-title-container-accomodation">
        <div className="collapse-title" onClick={() => setToggle(!toggle)}>
          {title}{' '}
          <img
            className={toggle ? 'arrow arrow-up' : 'arrow arrow-down'}
            src={Arrow}
            alt="Contenu"
          />
        </div>
      </div>
      <div className={toggle ? 'collapse-content' : 'collapse-content-hidden'}>
        {Array.isArray(content)
          ? content.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          : content}
      </div>
    </main>
  );
}

export default Collapse;
