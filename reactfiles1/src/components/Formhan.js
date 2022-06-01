import React, { Component } from 'react'

class Formhan extends Component{
   
    constructor(props){
        super(props)
        this.state = {
            username : ''
        }
    }
    
    handlechange = (event) => {
        this.setState({username : event.target.value})
    }

    whensubmit = (event) =>{
        alert(`hello ${this.state.username}`)
    }
    render(){
        return (
            <form onSubmit={this.whensubmit}>
                <label>Username</label>
                <input type='text'  
                value={this.state.username}
                onChange={this.handlechange}
                />
                <button type="submit">Submit</button>
            </form>
                
                
            
        )
    }
}

export default Formhan