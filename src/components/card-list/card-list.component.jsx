import React from 'react';
import './card-list.styles.scss';
import Card from '../card/card.component';

import BackToTop from '../back-to-top/back-to-top.component';

const CardList = ({ pokemon }) => (
  <div>
    <div className="card-list">
      {
        pokemon.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))
      }
    </div>
    <BackToTop />
  </div>

);

export default CardList;