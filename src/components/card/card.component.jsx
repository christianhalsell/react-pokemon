import React from 'react';
import { withRouter } from 'react-router-dom';
import './card.styles.scss';

const Card = ({ pokemon, history, match }) => (
  <div className="card" onClick={() => history.push(`${match.url}details/${pokemon.id}`)}>
    <div className="card-image">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
    </div>
    <div className="card-text">
      {pokemon.name}
    </div>
  </div>
);

export default withRouter(Card);