import React, {Component} from 'react'
import './Profile.css'

const Profile = props => {
    return (
        <>
        <div className='profile'>
    
         <h1>Hi im a profile with {props.pokemon}</h1>
    
        </div>
        </>
    )

}

export default Profile;