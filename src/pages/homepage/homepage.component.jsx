import React from 'react';
import './homepage.styles.scss';

import Banner from '../../components/banner/banner.component';
import CardList from '../../components/card-list/card-list.component';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
      .then(response => response.json())
      .then(users => this.setState({
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

        <div className="search">
          <div className="search-box">
            <input
              className="search-field"
              type="search"
              placeholder="Search for Pokemon..."
              onChange={this.handleChange}
            />
          </div>
        </div>
        <CardList pokemon={filteredPokemon} />
      </div>
    )
  }
};

export default HomePage;