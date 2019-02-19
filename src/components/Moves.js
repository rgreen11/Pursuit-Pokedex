import React from 'react'
import MovesModal from './MovesModal'
const Moves = (props) => {
    console.log(props)
    return (   
        <>
                        {props.moves.map((e,i)=>{
                        return (
                            <>
                            <div className='col col-2 move'>
                            <MovesModal  key={i} move={e.move} />
                            </div>
                        
                        </>
                        )
                        })}
       </> 
    )
}

export default Moves;