import React from 'react';
import './details-stats.styles.scss';

const DetailsStats = ({ typeMain, typeSecondary, weight, height }) => (
  <div className="pokemon-stats">
    <div className="pokemon-stats__data-row">
      <div className="stats-weight">{Math.round(weight / 4.536)} lb</div>
      <div className="stats-type">
        <div className={`type-icon ${typeMain}`} />
        {typeSecondary && <div className={`type-icon secondary ${typeSecondary}`} />}
      </div>
      <div className="stats-height">{Math.round(height * 10 / 2.54)} in</div>
    </div>
    <div className="pokemon-stats__label-row">
      <div className="stats-weight">Weight</div>
      <div className="stats-type">
        {typeMain}
        {typeSecondary && <div className="type-divider"> / </div>}
        {typeSecondary && typeSecondary}
      </div>
      <div className="stats-height">Height</div>
    </div>
  </div>
);

export default DetailsStats;
