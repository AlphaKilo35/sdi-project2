import { useState, useEffect } from 'react';

function useRandomCardFetch (cardCount, refreshKey) {

  const [loading, setLoading] = useState(true);
  const [randomCardList, setRandomCardList] = useState([]);

  const fetchCardData = async (cardCount) => {
    setLoading(true);
    let cards = [];
    for (let i = 0; i < cardCount; i++ ){
      let response = await fetch('https://api.scryfall.com/cards/random')
        .then(response => !response.ok ? Promise.reject(new Error('Failed to Fetch List')) : Promise.resolve(response.json()))
        .catch(error => { console.log(error.message); });
      let cardData = await response;
      cards.push(cardData);
      //pause loop for 50 milliseconds, as per API docs
      await new Promise(resolve => setTimeout(resolve,50))
    }
    setRandomCardList(cards);
    setLoading(false);
  };
  useEffect( () => { fetchCardData(cardCount); }, [cardCount, refreshKey] );

  return {randomCardList, loading}
}

export default useRandomCardFetch;