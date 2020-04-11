import React from 'react';
import { withRouter } from 'react-router-dom';
import './back-button.styles.scss';

const BackButton = ({ history }) => (
  <button onClick={() => history.push('/')}>Back to Homepage</button>
);

export default withRouter(BackButton);