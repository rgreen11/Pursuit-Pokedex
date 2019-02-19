import React, {Component} from 'react';
import './displayList.css';



const DisplayList = (props)=>{
    const pokemon = props.pokemons  
   const ProfileClick = (e) => {
       console.log(e.target.id)
        props.handleProfileClick(e.target.id)
    }   
   
        return (
            <>
            <div className='pokemon-container'>
            {
            pokemon.map((e,i)=>{
                let padNum;
                if (i < 9){
                padNum = `00${i+1}`
                }
                else if (i >= 9 && i <= 99){
                    padNum = `0${i+1}`
                }
                else padNum = `${i+1}`
                let name = e.name.charAt(0).toUpperCase() + e.name.slice(1)

                return (
                    <>
                    <div className='row pokemon-link'>
                    <div className='col'>
                    <img src={`https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`}/>
                    </div>
                    <div className='col-10 poke-name'>
                    <p id={e.name} onClick ={ProfileClick}>{name}</p>
                    </div>
                    <div className='col'>
                    #{padNum}
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