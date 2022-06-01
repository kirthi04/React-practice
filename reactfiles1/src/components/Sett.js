import React, { Component } from 'react'

class Sett extends Component{
    constructor(){
        super()

        this.state = {
            message : 'hello',
            value : 1
        }
    }

    /*changeVal(){
        this.state.value = this.state.value + 1;
        console.log(this.state.value)
    }*/

    /*changeVal(){
        this.setState({value : this.state.value + 1})
        console.log(this.state.value)
    }*/
    
    changeVal(){
        this.setState((prevState) => ({value : prevState.value + 1}) , (() => 
            console.log(this.state.value)))

    }

    render(){
        return (
            <div>
                <h1>{this.state.message }</h1>
                <h2>{this.state.value}</h2>
                <button onClick = {() => this.changeVal()}> Click me </button>
            </div>
        )
    }
}

export default Sett