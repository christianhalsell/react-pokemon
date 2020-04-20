import React from 'react';

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
    const { pokemonDetails } = this.state;

    return (
      <main className="pokemon-details">
        {pokemonDetails.id ? <PokemonDetails {...pokemonDetails} /> : <Loading />}
      </main>
    )
  }
}

export default Details;
