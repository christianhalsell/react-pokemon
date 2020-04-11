import React from 'react';
import './details.styles.scss';

import BackButton from '../../components/back-button/back-button.component';

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
        <BackButton />


        <h1>Details on <span className="pokemon-name">{pokemonDetails.name}</span></h1>
        <div>Background Image: {
          pokemonDetails.types ? pokemonDetails.types.map((item) => item.slot === 1 ? item.type.name : null) : null
          // TODO: Reverse array so I don't have to nest terinary operators
        }
        </div>
        <img className="pokemon-image" src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonDetails.id}.png`} alt="" />
        <div>Name: <span className="pokemon-name">{pokemonDetails.name}</span></div>
        <div>Weight: {Math.round(pokemonDetails.weight / 4.536)} lbs</div>
        <div>Types:</div>
        <div>
          <ul>
            {
              pokemonDetails.types ? pokemonDetails.types.map((item) => <li key={item.type.name}>{item.type.name}</li>) : ''
            }
          </ul>
        </div>
        <div>Height: {Math.round(pokemonDetails.height * 10 / 2.54)} in</div>
        <div>Abilities:</div>
      </div>
    )
  }
}

export default Details;