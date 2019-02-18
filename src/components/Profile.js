import React, {Component} from 'react'
import Axios from 'axios'
import './Profile.css'

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = { 
            stats : {}
        }
    }
     componentDidMount = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon}`)
        .then((data)=>{
            const newStats = data.data;
            this.setState({stats:newStats})
        },(err)=> console.log(err.toString()))
    }
    render () {
        return (
            <>
            <div className='profile'>
            {console.log(this.state.stats , "is stats")}
             <h1>Hi im a profile with {this.props.pokemon}</h1>
        
            </div>
            </> 
        )
    }
   
    
}

export default Profile;