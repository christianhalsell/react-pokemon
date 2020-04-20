import React from 'react';
import './image-large.styles.scss';

const PokemonImageLarge = ({ id, name }) => (
  <div className="pokemon-image">
    <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={name} />
  </div>
);

export default PokemonImageLarge;
