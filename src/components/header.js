import React from 'react';

const Header = props => {
    return (
        <div className='row'>
        <div className=' col-4' >
        <img className='pokeball' src='https://files.slack.com/files-pri/TD416AWAE-FG4T6BAHH/pokeball.png' alt='lol' />
        </div>
        <div className='col-4'>
        <h1>Pursuit Pokedex</h1>
   
        </div>
        <div className='col-4'>
        <img className='pokeball' src='https://files.slack.com/files-pri/TD416AWAE-FG4T6BAHH/pokeball.png' alt='lol' />
  
   </div>
  
        </div>
    )
}

export default Header;