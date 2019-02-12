import React, { Component } from 'react';
import LoadMore from './components/loadMore'
import Axios from 'axios';
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
 componentDidMount(){
   if(this.state.pokemons.length < 20){
    Axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${this.state.pokemons.length}&limit=20`)
   .then((pokemon)=>{
     const newPokemonArr =this.state.pokemons.concat(pokemon.data.results);
     this.setState({pokemons:newPokemonArr})
     console.log(this.state)
   },(err)=>{
    console.log(err)
   })
   }
   else return;
   
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
