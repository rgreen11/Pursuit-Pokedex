import React from 'react';
import './displayList.css';



const DisplayList = (props)=>{
    const pokemon = props.pokemons
   
        return (
            <>
            <div className='pokemon-container'>
            {
            pokemon.map((e,i)=>{
                return (
                    <>
                    <div className='row pokemon-link'>
                    <div className='col'>
                    <img src={`https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`}/>
                    </div>
                    <div className='col-10 poke-name'>
                    <p className='poke-name'>{e.name}</p>
                    </div>
                    <div className='col'>
                    #{i+1}
                    </div>
                    </div>
                    
                    </>
                )
            })
        }
        </div>
            {/* <button type="button" className="btn btn-primary btn-lg btn-block" onClick={e => console.log(this.state)} >POKEMON</button> */}
            </>
        );

}
 

export default DisplayList;