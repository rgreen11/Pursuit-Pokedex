import React, { Component } from 'react';
import LoadMore from './components/loadMore'
import SearchBar from './components/SearchBar'
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
      <div className ='container'>
        <SearchBar name={'Ivysaur'}/>
        <LoadMore getPokemon={this.getPokemon} pokemons={this.state.pokemons} />
      </div>
      </div>
      </>
    );
  }
}

export default App;
