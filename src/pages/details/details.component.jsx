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
    let typesArray = pokeDetails.types ? pokeDetails.types.reverse() : null;

    console.log(typesArray)

    return (
      <div className="pokemon-details">
        <h1>Details on <span className="pokemon-name">{pokeDetails.name}</span></h1>

        <div>Background Image: {
          pokeDetails.types ? pokeDetails.types.map((item) => item.slot === 1 ? item.type.name : null) : null
          // TODO: Reverse array so I don't have to nest terinary operators
        }
        </div>
        <img className="pokemon-image" src={`https://pokeres.bastionbot.org/images/pokemon/${pokeDetails.id}.png`} alt="" />
        <div>Name: <span className="pokemon-name">{pokeDetails.name}</span></div>
        <div>Weight: {Math.round(pokeDetails.weight / 4.536)} lbs</div>
        <div>Types:</div>
        <div>
          <ul>
            {
              pokeDetails.types ? pokeDetails.types.map((item) => <li key={item.type.name}>{item.type.name}</li>) : ''
            }
          </ul>
        </div>
        <div>Height: {Math.round(pokeDetails.height * 10 / 2.54)} in</div>
        <div>Abilities:</div>
      </div>
    )
  }
}

export default Details;