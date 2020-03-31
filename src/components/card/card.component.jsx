import React from 'react';
import './card.styles.scss';

const Card = ({ pokemon }) => (
  <div className="card">
    <div className="card-image">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="" />
    </div>
    <div className="card-text">
      {pokemon.name}
    </div>
  </div>
);

export default Card;