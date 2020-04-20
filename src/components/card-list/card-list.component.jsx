import React from 'react';
import './card-list.styles.scss';
import Card from '../card/card.component';

import BackToTop from '../back-to-top/back-to-top.component';

const CardList = ({ pokemon }) => (
  <>
    <section className="card-list">
      {
        pokemon.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))
      }
    </section>
    <BackToTop />
  </>

);

export default CardList;
