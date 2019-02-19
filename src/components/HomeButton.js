import React from 'react';
import './HomeButton.css'

const HomeButton = props =>{
    const handleClick = (e) => {
        if (e.target.value === 'home'){
            props.handleHomeClick();
        }
    }
    return (
        <>
        <a href='/' className='Home'>Home >> {props.profileClicked ? props.profileClicked: ''}</a>
        </>
    )
}

export default HomeButton;