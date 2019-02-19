import React, {Component} from 'react'
import Axios from 'axios'
import './Profile.css'

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = { 
            stats : {
                // having some default values to handle async data fetch, so that it will show image and prevent errors
                name:'lol',
                sprites: {
                    front_default: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjl8vyIxsbgAhUvnOAKHQ8yCHAQjRx6BAgBEAU&url=http%3A%2F%2Faj-failure-club.wikia.com%2Fwiki%2FFile%3ALoading-gif-transparent-background-11.gif&psig=AOvVaw0m_XfemyssdmAzTcrKzyG-&ust=1550622758333041',
                    back_default: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjl8vyIxsbgAhUvnOAKHQ8yCHAQjRx6BAgBEAU&url=http%3A%2F%2Faj-failure-club.wikia.com%2Fwiki%2FFile%3ALoading-gif-transparent-background-11.gif&psig=AOvVaw0m_XfemyssdmAzTcrKzyG-&ust=1550622758333041',
                    front_shiny: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjl8vyIxsbgAhUvnOAKHQ8yCHAQjRx6BAgBEAU&url=http%3A%2F%2Faj-failure-club.wikia.com%2Fwiki%2FFile%3ALoading-gif-transparent-background-11.gif&psig=AOvVaw0m_XfemyssdmAzTcrKzyG-&ust=1550622758333041',
                    back_shiny: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjl8vyIxsbgAhUvnOAKHQ8yCHAQjRx6BAgBEAU&url=http%3A%2F%2Faj-failure-club.wikia.com%2Fwiki%2FFile%3ALoading-gif-transparent-background-11.gif&psig=AOvVaw0m_XfemyssdmAzTcrKzyG-&ust=1550622758333041',
                },
                id:1
            }
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
        let name = this.state.stats.name.charAt(0).toUpperCase() + this.state.stats.name.slice(1)
        
        return (
            <>
            <div className='profile'>
            {console.log(this.state.stats , "is stats")}        
            </div>
            <div className='row'>
            <div className='col col-9'></div>
            <div className='col col-3 pokemon-name'>
             <h1> #{this.state.stats.id} -{name}</h1>
            </div>
            </div>
            <div className='row'>
            <div className='col col-4'>
            <img  className='poke-avatar' src={`https://img.pokemondb.net/artwork/${this.state.stats.name}.jpg`}></img>
            </div>
            <div className='col col-2'>
            <img src={this.state.stats.sprites.front_default}></img>
            </div>
            <div className='col col-2'>
            <img src={this.state.stats.sprites.back_default}></img>
            <div className = 'row'>
            <p>default</p>
            </div>
            </div>
            <div className='col col-2'>
            <img src={this.state.stats.sprites.front_shiny}></img>
            </div>
            <div className='col col-2'>
            <img src={this.state.stats.sprites.back_shiny} ></img>
            </div>
            </div>
            </> 
        )
    }
   
    
}

export default Profile;