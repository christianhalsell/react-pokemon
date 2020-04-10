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
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`)
      .then(response => response.json())
      .then(pokeDetails => this.setState({
        pokeDetails
      }))
  }

  render() {
    const pokeDetails = this.state.pokeDetails;

    return (
      <div className="pokemon-details">
        <h1>Details on <span className="pokemon-name">{pokeDetails.name}</span></h1>

        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDetails.id}.png`} alt="" />
        <div>Name: <span className="pokemon-name">{pokeDetails.name}</span></div>
        <div>Weight: {pokeDetails.weight} lbs</div>
        <div>Background Image: {
          pokeDetails.types ? pokeDetails.types.map((item) => item.slot === 1 ? item.type.name : null) : null
          // TODO: Reverse array so I don't have to nest terinary operators
        }
        </div>
        <div>All Types:</div>
        <div>
          <ul>
            {
              pokeDetails.types ? pokeDetails.types.map((item, index) => <li key={index}>{item.type.name}</li>) : ''
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Details;