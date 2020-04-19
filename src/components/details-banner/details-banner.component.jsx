import React from 'react'
import './details-banner.styles.scss';

import BackButton from '../back-button/back-button.component';

const DetailsBanner = ({ typeMain }) => (
  <div className={`pokemon-details-banner ${typeMain}`}>
    <BackButton />
  </div>
);

export default DetailsBanner;