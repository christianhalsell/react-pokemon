import React from 'react';
import './details.styles.scss';

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      pokeDetails: []
    }
  }

  componentDidMount() {
    try {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`)
        .then(response => response.json())
        .then(pokeDetails => this.setState({
          pokeDetails
        }))
    } catch (e) {
      console.log(e.message);
    }

  }

  render() {
    return (
      <div>
        <div>Details on {this.state.pokeDetails.name}.</div>
      </div>
    )
  }
}

export default Details;