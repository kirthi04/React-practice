import React, { Component } from 'react'

class Greet3 extends Component{
   

     changeMessage(){
        console.log("hellooooo")
    }
    render(){
        return (
            <div>
                
                <button onClick =  {this.changeMessage} > Click me </button>
            </div>
        )
    }
}

export default Greet3