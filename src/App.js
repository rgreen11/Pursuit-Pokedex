import React, { Component } from 'react';
import LoadMore from './components/loadMore'
import { SearchBar, Bar} from './components/SearchBar'
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

 searchPokemon = pokemon => {
  //  this.state.pokemons.map((e)=>{
  //     if(e !== pokemon){
  //       return 'Enter a Pokemon'
  //     }
  //     return e
  //  })
  this.setState({pokemons:pokemon})
  console.log(this.state);
 }
 
  render() {
    let poke = this.state.pokemons
    return (
      <>
      <div className="App">
      <div className ='container'>
        <Bar searchPokemon={this.searchPokemon}/>
        <SearchBar poke={poke} />
        <LoadMore getPokemon={this.getPokemon} pokemons={this.state.pokemons} />
      </div>
      </div>
      </>
    );
  }
}

export default App;
