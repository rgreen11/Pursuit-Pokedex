import React, {Component} from 'react'
import Axios from 'axios'
import './Profile.css'
import Moves from './Moves'
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
                id:1,
                types : [{
                    type: {
                        name:'lol'
                    }
                }],
                stats : [{
                    base_stat:1,
                    stat: {
                        name:'speed',
                        url:'google.com'

                    }
                }],
                moves :  [
                    {
                    "move": {
                    "name": "mega-punch",
                    "url": "https://pokeapi.co/api/v2/move/5/"
                    },
                    "version_group_details": []
                    } ]
            },
             colors : {
                normal: '#A3AD76',
                fire: '#FC7A08',
                fighting: '#CC0011',
                water: '#6F77F2',
                flying: '#BCAFFB',
                grass: '#51D851',
                poison: '#AD009E',
                electric: '#F9DA0E',
                ground: '#E0C661',
                psychic: '#FF1980',
                rock: '#B6A731',
                ice: '#87DBD9',
                bug: '#9CC516',
                dragon: '#5B00A1',
                ghost: '#784597',
                dark: '#725948',
                steel: 'B8B2CF#',
                fairy: '#FA8AA7',
                unknown:'#58A490'
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
    moveClick(e){
        console.log(e)
        Axios.get(`https://pokeapi.co/api/v2/move/${e.target.id}/`)
        .then(data => {
           let move =  data.data

        }, err => {console.log(err)})
    }
    render () {
        let name = this.state.stats.name.charAt(0).toUpperCase() + this.state.stats.name.slice(1)
        
        return (
            <>
            <div className='profile'>
            {console.log(this.state.stats , "is stats")}        
            
            <div className='row'>
            <div className='col col-9'></div>
            <div className='col col-3 pokemon-name'>
             <h1 className='PokemonName'> #{this.state.stats.id} -{name}</h1>
            </div>
            </div>
            <div className='row'>
            <div className='col col-4 img-center'>
            <img  className='poke-avatar' src={`https://img.pokemondb.net/artwork/${this.state.stats.name}.jpg`}></img>
            <div className='row'>
            {
                this.state.stats.types.map((e,i)=>{
                    if (i > 0) {
                        return (
                        <button className='btn' style={{backgroundColor:this.state.colors[e.type.name]}}>{e.type.name}</button> 
                        )
                    }
                 else return (
                 <button className='btn type' style={{backgroundColor:this.state.colors[e.type.name]}}>{e.type.name}</button> 
                 )
                })
            }
            </div>
            </div>
            <div className='col col-2'>
            <img src={this.state.stats.sprites.front_default}></img>
            </div>
            <div className='col col-2'>
            <img src={this.state.stats.sprites.back_default}></img>
            <div className = 'row'>
            <p style={{'fontWeight':'bold'}}>default</p>
            </div>
            </div>
            <div className='col col-2'>
            <img src={this.state.stats.sprites.front_shiny}></img>
            </div>
            <div className='col col-2'>
            <img src={this.state.stats.sprites.back_shiny} ></img>
            </div>
            </div>
            <div className='row stats'>
            <div className='col'><h1>Base stats</h1>
</div>
</div>
            <div className='row pokemon-stats'>
            <div className='col'> HP
            <div className='col'>{
                this.state.stats.stats.map((e,i)=>{
                    if (e.stat.name === 'hp'){
                        return <p>{e.base_stat}</p>
                    }
                })
            }</div>
            </div>
            <div className='col'>Attack
            <div className='col'>{
                this.state.stats.stats.map((e,i)=>{
                    if (e.stat.name === 'attack'){
                        return <p>{e.base_stat}</p>
                    }
                })
            }</div>
            </div>
            <div className='col'>Defense
            <div className='col'>{
                this.state.stats.stats.map((e,i)=>{
                    if (e.stat.name === 'defense'){
                        return <p>{e.base_stat}</p>
                    }
                })
            }</div>
            </div>
            <div className='col'>Sp.Attack
            <div className='col'>{
                this.state.stats.stats.map((e,i)=>{
                    if (e.stat.name === 'special-attack'){
                        return <p>{e.base_stat}</p>
                    }
                })
            }</div>
            </div>
            <div className='col'>Sp.Defense
            <div className='col'>{
                this.state.stats.stats.map((e,i)=>{
                    if (e.stat.name === 'special-defense'){
                        return <p>{e.base_stat}</p>
                    }
                })
            }</div>
            </div>
            <div className='col'>Speed
            <div className='col'>{
                this.state.stats.stats.map((e,i)=>{
                    if (e.stat.name === 'speed'){
                        return <p>{e.base_stat}</p>
                    }
                })
            }</div>
            </div>
            </div>
            <div className= 'row'>
            <div className='col'>
            <h1>Moves</h1>
            </div>
            <div className= 'row poke-moves'>
            <Moves moves={this.state.stats.moves} />
                        
            </div>
            </div>
            </div>
            </> 
        )
    }
   
    
}

export default Profile;