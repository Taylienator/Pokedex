import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
            pokemon: text
        })
    }
    handleSubmit(e){
        
        alert('Hello, ' + this.state.pokemon + ' is the pokemon you have chosen');
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <h1 align="center">Checkout Your Pokemon!</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange= {this.handleInput} placeholder='enter your pokemon!' value={this.state.pokemon}/>
                        <input type="submit" value="Submit" />
                    </form>
            </div>
        )
    }
}

export default App;
