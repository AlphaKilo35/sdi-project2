/* eslint-disable react/prop-types */
import {useContext} from 'react';

import CardDataContext  from '../utils/contexts.jsx';

import './styles/card-grid.css'

const CardGrid = ( {onSelectedCard} ) => {
  let cardList = useContext(CardDataContext);
  return (
    <>
    <div className ="card-grid">
      <ul className="card-list">
        {cardList.map((card, index) => (
          <li className="card-list-item" key={index} id={index+1} onClick={() => onSelectedCard(card)}>
            <img alt={card.name} src={card.image_uris.normal} />
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default CardGrid;