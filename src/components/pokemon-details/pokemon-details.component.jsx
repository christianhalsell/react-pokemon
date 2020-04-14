import React from 'react';
import './pokemon-details.styles.scss';

import BackButton from '../back-button/back-button.component';

const PokemonDetails = ({ id, types, name, weight, height }) => {
  let typeMain, typeSecondary;

  // TODO: not super-happy with this approach. Think about refactor
  // Because the api has the types in reverse order
  for (let i in types) {
    if (types[i].slot === 1) {
      typeMain = types[i].type.name;
      console.log(`Primary type: ${typeMain}`)
    } else if (types[i].slot === 2) {
      typeSecondary = types[i].type.name;
      console.log(`Secondary type: ${typeSecondary}`)
    }
  }

  return (
    <div className={`pokemon-details-wrapper ${typeMain}`}>
      <div className="pokemon-details-container">
        <div className="pokemon-details-container__banner">
          <BackButton />
        </div>

        <div className="pokemon-image">
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="" />
        </div>

        <div><span className="pokemon-name">{name}</span></div>
        <div>
          <div>Weight: {Math.round(weight / 4.536)} lbs</div>
          <div>
            {typeMain}{typeSecondary ? ` / ${typeSecondary}` : null}
          </div>
          <div>Height: {Math.round(height * 10 / 2.54)} in</div>
        </div>
      </div >
    </div >
  )
}

export default PokemonDetails;