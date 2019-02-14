import React from 'react';
import './displayList.css';



const DisplayList = (props)=>{
    const pokemon = props.pokemons
   
        return (
            <>{
            pokemon.map((e,i)=>{
                return (
                    <>
                    <div className='row'>
                    <div className='col-12'>
                    <p>{e.name}</p>
                    </div>
                    </div>
                    </>
                )
            })
        }
            {/* <button type="button" className="btn btn-primary btn-lg btn-block" onClick={e => console.log(this.state)} >POKEMON</button> */}
            </>
        );

}
 

export default DisplayList;