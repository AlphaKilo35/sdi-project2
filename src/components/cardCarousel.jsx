/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from 'react';
import CardDataContext from '../utils/contexts.jsx';

import './styles/card-carousel.css';


const CardCarousel = ( {onSelectedCard} ) => {
  var cardList = useContext(CardDataContext)
  const [activeCard, setActiveCard] = useState(0);


  //auto-scrolling of the carousel
  let idleTimer;
  let resetIdleTimer = () => {
    clearTimeout(idleTimer);
  };

  useEffect( () => {
    idleTimer = setTimeout( () => {
      setActiveCard((prevCard) => (prevCard + 1) % cardList.length);}, 10000);
    return () => { clearTimeout(idleTimer); }
  }, [activeCard]);



  const handleClick = (newActivePos) => { setActiveCard(newActivePos); resetIdleTimer();}

  let getPosition = (currentIndex, activeIndex, length) => {
    let halfLength = Math.floor(length/2);
    let relativePosition = currentIndex - activeIndex;
    if (Math.abs(relativePosition) > halfLength) { return relativePosition < 0 ? relativePosition + length : relativePosition - length}
    return relativePosition;
  }





  return (
    <div className="card-carousel">
      <ul className="card-carousel-list">
        {cardList.map((card, index) => {
          let cardPos = getPosition(index, activeCard, cardList.length);
            return (
              <li key={index} id={index+1}
              className={`carousel-item ${cardPos === 0 ? 'active' : ''}`}
              data-pos={cardPos}
              onClick={() => handleClick(index)}
              onDoubleClick={() => onSelectedCard(card)}>
                <img alt={card.name} src={card.image_uris.normal} />
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default CardCarousel;