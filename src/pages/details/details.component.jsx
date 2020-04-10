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
      <div className="pokemon-details">
        <div>Details on <span className="pokemon-name">{this.state.pokeDetails.name}</span>.</div>
      </div>
    )
  }
}

export default Details;