import React from 'react';
import Axios from 'axios'
import PokemonList from './PokemonList'

// console.log(PokemonList.Charmander)


const SearchBar = (props) => {
    
    console.log(props.poke)
    console.log('2',PokemonList[`${props.poke}`])
    if(props.poke !== PokemonList[`${props.poke}`]){
        return 'Not a Valid Pokemon'
    }
    
    return <div>
    <div className = 'row'>
        <div className = 'col-4'>
            <img src={`https://img.pokemondb.net/sprites/sun-moon/icon/${PokemonList[`${props.poke}`].toLocaleLowerCase()}.png`}alt={`${PokemonList[`${props.poke}`]}`}/>
        </div>
        <div className = 'col-4'>
            <p>{PokemonList[`${props.poke}`]}</p>
        </div>
        </div>
    </div>
    

}

const Bar = (props) =>{
  
    return <>
    <form className="form-inline" >
      <input className="form-control mr-ls-2" type="text" placeholder="Search..." aria-label="lol" onChange={(e=>{props.searchPokemon(e.currentTarget.value)})} />
    </form>
    
  </>
}
// SearchBar(e.target.value)
export {SearchBar, Bar}