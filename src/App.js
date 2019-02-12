import React, { Component } from 'react';
import LoadMore from './components/loadMore'
class App extends Component {
  constructor(props){
   super(props)
   this.state = {
     pokemons : []
   }
 }
 getPokemon = pokemons => {
   const newPokemonArr = this.state.pokemons.concat(pokemons);
   this.setState({pokemons:newPokemonArr});
  console.log(this.state);
 }
  render() {
    return (
      <>
      <div className="App">
      <br></br>
      <h1>Pursuit Pokedex</h1>

        <LoadMore getPokemon={this.getPokemon} pokemons={this.state.pokemons} />
      </div>
      </>
    );
  }
}

export default App;
