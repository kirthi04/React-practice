import React, { Component } from 'react'

class Condiren extends Component{
    constructor(props){
        super(props)
        this.state = {
            message : true
        }
    }

    render(){
        if(this.state.message){
            return (
                <div>
                    <h1>Hello</h1>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h1>No message</h1>
                </div>
            )
        }
       
    }
}

export default Condiren