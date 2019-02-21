import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            pokemon: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){
        let text = e.target.value;
        
        this.setState({
            pokemon: text,
            pokemonApi: '',
            pokemonImage: '',
            pokemonName: ''
        })
    }
    handleSubmit(e){
        const user_input = this.state.pokemon
        const text_lower = user_input.toLowerCase();
        const api = `https://pokeapi.co/api/v2/pokemon/${text_lower}/`
        axios.get(api)
        .then(res =>{
            let pokemon = res.data
            let pokemonPic = res.data.sprites.front_shiny
            let pkName = res.data.name
            this.setState({
                pokemonApi:pokemon,
                pokemonImage: pokemonPic,
                pokemonName: pkName
                
            })
            
        })
        e.preventDefault();
        
    }
    
    render(){
        return(
            <div>
                <h1 align="center">Checkout Your Pokemon!</h1>
                    <form align="center" onSubmit={this.handleSubmit}>
                        <input type="text" onChange= {this.handleInput} placeholder='enter your pokemon!' value={this.state.pokemon}/>
                        <input type="submit" value="Submit" />
                    </form>
                {this.state.pokemonName && 
                    <p>Your Pokemon is {this.state.pokemonName}!!</p> }
            </div>
        )
    }
}

export default App;
