import React, { Component } from 'react';
import LoadMore from './components/loadMore'
import  SearchBar from './components/SearchBar'
import Axios from 'axios';
import DisplayList from './components/displayList.js';
import Header from './components/header'
import Profile from './components/Profile'
import HomeButton from './components/HomeButton'

class App extends Component {
  constructor(props){
   super(props)
   this.state = {
     pokemons : [],
     isActiveSearch : false,
     profileClicked: ''
   }
 }
 
 getPokemon = pokemons => {
   const newPokemonArr = this.state.pokemons.concat(pokemons);
   this.setState({pokemons:newPokemonArr})
 }
handleProfileClick = pokename => {
  let profile = pokename;
  this.setState({profileClicked:profile})

}
handleHomeClick = () => {
  let profile = '';
  this.setState({profileClicked:profile})
}
 componentDidMount(){
   if(this.state.pokemons.length < 20 && this.state.isActiveSearch === false){
    Axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${this.state.pokemons.length}&limit=20`)
   .then((pokemon)=>{
     const newPokemonArr =this.state.pokemons.concat(pokemon.data.results);
     this.setState({pokemons:newPokemonArr})
     console.log(this.state)
   },(err)=>{
    console.log(err)
   })
   }
   return;
   
 }

  render() {
    if (this.state.profileClicked.length > 1 || this.state.profileClicked !== ""){
      return (
        <>
        <div className='App'>
        <Header></Header>
        <SearchBar handleProfileClick={this.handleProfileClick}/>
        <HomeButton profileClicked={this.state.profileClicked} handleHomeClick={this.handleHomeClick}></HomeButton>
        <Profile pokemon={this.state.profileClicked}></Profile>
        </div>
        
        </>
      )
    } 
    return (
        <>
        
        <div className="App">
        <Header></Header>
        <SearchBar handleProfileClick={this.handleProfileClick}/>
      <DisplayList pokemons={this.state.pokemons} handleProfileClick={this.handleProfileClick}/>
          {/* <DisplayList pokemons={this.state.pokemons}/> */}
        <LoadMore getPokemon={this.getPokemon} pokemons={this.state.pokemons} />
        </div>
  
      </> )
    
    
    
   
    
   
  }
}

export default App;
