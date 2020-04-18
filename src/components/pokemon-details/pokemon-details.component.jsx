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
    } else if (types[i].slot === 2) {
      typeSecondary = types[i].type.name;
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

        <div className="pokemon-name">{name}</div>

        <div className="pokemon-stats">
          <div className="pokemon-stats__data-row">
            <div className="stats-weight">{Math.round(weight / 4.536)} lb</div>
            <div className="stats-type">
              <div className={`type-icon ${typeMain}`}></div>
              {typeSecondary ? <div className={`type-icon secondary ${typeSecondary}`}></div> : null}
            </div>
            <div className="stats-height">{Math.round(height * 10 / 2.54)} in</div>
          </div>
          <div className="pokemon-stats__label-row">
            <div className="stats-weight">Weight</div>
            <div className="stats-type">
              {typeMain}
              {typeSecondary ? <div className="type-divider"> / </div> : null}
              {typeSecondary ? typeSecondary : null}
            </div>
            <div className="stats-height">Height</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails;