import React from 'react';
import Axios from 'axios'
import PokemonList from './PokemonList'

// console.log(PokemonList.Charmander)
const SearchBar = (props) => {
    if(props.name !== PokemonList[`${props.name}`]){
        return 'Not a Valid Pokemon'
    }
    
    return <div >
    <div className = 'row'>
        <div className = 'col-4'>
            <img src={`https://img.pokemondb.net/sprites/sun-moon/icon/${PokemonList[`${props.name}`].toLocaleLowerCase()}.png`}alt={`${PokemonList[`${props.name}`]}`}/>
        </div>
        <div className = 'col-4'>
            <p>{PokemonList[`${props.name}`]}</p>
        </div>
        </div>
    </div>
    

}

export default SearchBar