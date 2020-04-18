import React from 'react';
import { withRouter } from 'react-router-dom';
import './back-button.styles.scss';

const BackButton = ({ history }) => (
  <button className="back-button" onClick={() => history.push('/')}>
    <span>Back to Homepage</span>
  </button>
);

export default withRouter(BackButton);