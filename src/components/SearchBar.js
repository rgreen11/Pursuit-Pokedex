import React from 'react';
import PokemonList from './PokemonList'
import './SearchBar.css'



class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search : [],
        }
    }


    PokeSearch = (e) => {
        let optionsArr = []
      for(let i = 0; i < PokemonList.length; i++) {
        if (PokemonList[i].indexOf(e.target.currentTarget > -1)){
            optionsArr.push(PokemonList[i])
            console.log(this.state)
          }

          this.setState({search:optionsArr})
        }
    }

    render(){
        return ( 
            <>
            <div className="Search-box">
                <input type="text" className="searchText" placeholder ='PokeBallers...' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" list = 'pokemonList' onChange ={this.PokeSearch}/>
                    <a className ='searchButton' href ='ok'>
                         <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/0c3bbade-58ef-4c64-9a3e-26cf3c477338/d7ea28n-430864db-4a85-4973-84ff-3b494a72beec.png/v1/fill/w_898,h_890,strp/master_ball__01__by_adfpf1_d7ea28n-pre.png
                        ' alt ='' height ='60px' className="img"/>  
                    </a>
                    <datalist id ='pokemonList'>
                    {
                    this.state.search.map((e,i)=>{
                        console.log(e)
                        return <option value = {`${e}`} key ={i}/>
                    })
                }
                    </datalist>
            </div>
              </>
        )
    }


}
   
  
    



export default SearchBar