/* eslint-disable react/prop-types */
import './styles/card-grid-buttons.css'

const GridButtons = ( {onClick} ) => {
  return (
  <>
    <button onClick={ () => onClick(1) }>1 Random Card</button>
    <button onClick={ () => onClick(5) }>5 Random Cards</button>
    <button onClick={ () => onClick(10) }>10 Random Cards</button>
  </>
  )
}

export default GridButtons;