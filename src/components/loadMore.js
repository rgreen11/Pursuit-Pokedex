import axios from 'axios';
import React from 'react';
let style = {
    'background-color': 'red',
    'width': '50%',
    'color':'white'
}
const LoadMore = props => {
    const handleApiCall = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${props.pokemons.length}&limit=20`)
        .then(pokemon=>{
            props.getPokemon(pokemon.data.results);
        },err=>{
            console.log('error');
        })
    }
    return (
        <button className='btn .bg-danger' onClick={handleApiCall} style={style}>Load More</button>
    )
}

export default LoadMore;