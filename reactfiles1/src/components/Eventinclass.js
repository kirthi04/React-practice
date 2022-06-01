import React, { Component } from 'react'

class Eventinclass extends Component{
    constructor(props){
        super(props)
        this.state = {
            message : 'hello'
        }
        this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage(){
        this.setState({message : 'thanks'})
    }
    render(){
        return (
           /* <div>
                <h1>{this.state.message }</h1>
                <button onClick = {this.changeMessage.bind(this)}> Click me </button>
            </div> */

            /*<div>
            <h1>{this.state.message }</h1>
             <button onClick = {() => this.changeMessage()}> Click me </button>
            </div> */
             
            <div>
                <h1>{this.state.message}</h1>
                <button onClick =  {this.changeMessage} > Click me </button>
            </div>

        )
    }
}

export default Eventinclass