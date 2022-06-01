import React, { Component } from 'react'
import Childcom from './Childcom'

class Parentcom extends Component{
   
    constructor(props){
        super(props)
        this.state = {Pname : 'Parent'}
        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(){
        this.setState({Pname : 'child'})
    }
    render(){
        return (
            <div>
                <Childcom greetHandler = {this.greetParent} />
                <h1>{this.state.Pname }</h1>
            </div>
        )
    }
}

export default Parentcom