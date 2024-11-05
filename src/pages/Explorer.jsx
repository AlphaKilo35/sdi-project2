import { useState } from 'react';
import useRandomCardFetch from '../utils/randomCardFetch.jsx';
import CardGrid from '../components/cardGrid.jsx';
import Modal from '../components/modal.jsx';
import GridButtons from '../components/cardGridButtons.jsx';
import CardDataContext from '../utils/contexts.jsx';

import './styles/explorer.css';

//mocking resources
//import { useEffect } from 'react;
//import randomCard from '../../resources/randomCard.json';

function Explorer () {
  const [cardCount, setCardCount] = useState(5);
  const [refreshKey, setRefreshKey] = useState(0);
  const {randomCardList, loading} = useRandomCardFetch(cardCount, refreshKey);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalState, setModalState] = useState(false);

  const handleModalData = (card) => {setSelectedCard(card); setModalState(true);}
  const closeModal = () => { setModalState(false); setSelectedCard(null); }
  const handleCardCountChange = (count) => { setCardCount(count);setRefreshKey(prevKey => prevKey + 1);}
  //random card testing
  //const [data, setData] = useState({});
  //useEffect( () => { setData(randomCard); }, [] );

  if(loading) return <p>Loading {cardCount} Random Cards</p>
  return (
    <>
      <CardDataContext.Provider value={randomCardList}>
        <CardGrid onSelectedCard={handleModalData}/>
        {modalState && (<Modal selectedCard={selectedCard} onClose={closeModal} />)}
        <GridButtons onClick={handleCardCountChange} />
      </CardDataContext.Provider>
    </>
  )
}

export default Explorer;
