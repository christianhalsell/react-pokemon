import React from 'react';
import './card-list.styles.scss';
import Card from '../card/card.component';

const CardList = ({ pokemon }) => (
  <div className="card-list">
    {
      pokemon.map((pokemon, index) => (
        <Card key={index} pokemon={pokemon} />
      ))
    }
  </div>
);

export default CardList;