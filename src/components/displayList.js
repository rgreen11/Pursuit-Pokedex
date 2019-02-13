import React from 'react';
import './displayList.css';



class DisplayList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeProfile: false,
            pokemons: []
        }
    }
    PokemonsForState (){
        this.setState({pokemons:this.props.pokemons})
    }
    componentDidMount(){
        this.PokemonsForState();
    }
    render() {
        return (
            <>
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={e => console.log(this.state)} >Block level button</button>
            </>
        );
    }
}

export default DisplayList;