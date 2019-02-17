import React from 'react';


const SearchAPI = (props) => {
        return (
            <div>
        <img src={`https://img.pokemondb.net/artwork/${props.pokemon}.jpg`} alt = '#'/>
        </div>
        )
   
}



const TypeApiCall = () => {
    axios.get(`https://pokeapi.co/api/v2/move/razor-wind/`)
    .then(pokemon=>{
        props.getPokemon(pokemon.data.results);
    },err=>{
        console.log('error');
    })
}