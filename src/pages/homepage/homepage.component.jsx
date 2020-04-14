import React from 'react';
import './homepage.styles.scss';

import Banner from '../../components/banner/banner.component';
import Search from '../../components/search/search.component';
import Loading from '../../components/loading/loading.component';
import CardList from '../../components/card-list/card-list.component';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      limit: 807,
      searchField: '',
      pokemonLoaded: false
    }
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${this.state.limit}`)
      .then(response => response.json())
      .then(users => this.setState({
        pokemonLoaded: true,
        pokemon: users.results
          .map((poke, index) => ({ id: index + 1, ...poke }))
      }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { pokemon, searchField } = this.state;
    const filteredPokemon = pokemon.filter((monster) => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ));

    return (
      <div className="homepage">
        <Banner />
        <Search placeholder="Search for Pokémon..." handleChange={this.handleChange} />
        {this.state.pokemonLoaded ? <CardList pokemon={filteredPokemon} /> : <Loading />}
      </div>
    )
  }
};

export default HomePage;