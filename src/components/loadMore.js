import axios from 'axios';
import React from 'react';
let style = {
    'backgroundColor': 'red',
    'width': '50%',
    'color':'white',
    'margin':'60px'
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
        <div className='row'>
        <div className='col'>

        <button className='btn .bg-danger' onClick={handleApiCall} style={style}>Load More</button>

        </div>
        </div>
    )
}

export default LoadMore;