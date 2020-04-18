import React from 'react';
import './details.styles.scss';

import PokemonDetails from '../../components/pokemon-details/pokemon-details.component';
import Loading from '../../components/loading/loading.component';

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonDetails: []
    }
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`)
      .then(response => response.json())
      .then(pokemonDetails => this.setState({
        pokemonDetails
      }))
  }

  render() {
    const pokemonDetails = this.state.pokemonDetails;

    return (
      <div className="pokemon-details">
        {pokemonDetails.id ? <PokemonDetails {...pokemonDetails} /> : <Loading />}
      </div>
    )
  }
}

export default Details;