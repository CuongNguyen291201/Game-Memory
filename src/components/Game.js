import React, { useState, useEffect } from 'react'

const Game = () => {
  const url = `https://pokeres.bastionbot.org/images/pokemon`;

  const pokemons = [
    { id: 1, name: 'a', status: false},
    { id: 10, name: 'b', statur: false},
    { id: 14, name: 'c', statur: false},
    { id: 89, name: 'd', statur: false},
    { id: 50, name: 'e', statur: false}
  ];

  const morePokemons = [...pokemons, ...pokemons];
  const [openCard, setOpenCard] = useState([]);
  const [match, setMatch] = useState([]);

  const handleFlipp = (index) => {
    setOpenCard((opened) => [...opened, index])
  }

  useEffect(() => {
    const firstMatch = morePokemons[openCard[0]];
    const secondMatch = morePokemons[openCard[1]];
    
    if (secondMatch && firstMatch.id === secondMatch.id) {
      setMatch(match => [...match, firstMatch.id])
    }
    
    if (openCard.length === 2) setTimeout(() => {
      setOpenCard([])
    }, 1000);
  }, [openCard])

  return (
    <div className="game">
      <div className="cards">
        {
          morePokemons.map((pokemon, index) => {

            let flag = false;
            if (openCard.includes(index)) flag = true;
            if (match.includes(pokemon.id)) flag = true;

            return (
              <div 
              className={`pokemon-card ${flag ? 'flipped' : ''}`} key={index}
              onClick={() => handleFlipp(index)}
              >
                <div className="inner">
                  <div className="front">
                    <img src={`${url}/${pokemon.id}.png`} alt="pokemon" width="100" />
                  </div>
                  <div className="back"></div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Game
