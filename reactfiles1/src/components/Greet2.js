import React, { Component } from 'react'

class Greet2 extends Component{
    constructor(){
        super()
        this.state = {
            message : 'hello'
        }
    }

    changeMessage(){
        this.setState({message : 'thanks'})
    }
    render(){
        return (
            <div>
                <h1>{this.state.message }</h1>
                 <button onClick = {() => this.changeMessage()}> Click me </button>
            </div>
        )
    }
}

export default Greet2