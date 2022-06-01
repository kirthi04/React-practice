import React, { Component } from 'react'
import axios from 'axios'

class Postreq extends Component{
   
    constructor(props){
        super(props)
        this.state = {
            userId : '',
            title : '',
            body : ''
        }
    }
    
    handlechange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    

    whensubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
        //axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        /*.then(response => {
            console.log(response)
        })*/
    }
    
    render(){
        const {idd , title , body} = this.state
        return (
            <div>
            <form onSubmit={this.whensubmit}>
                <div>
                <label>Userid</label>
                <input type='text'  
                name='idd'
                value={idd}
                onChange={this.handlechange}
                />
                </div>
                <div>
                <label>title</label>
                <input type='text' 
                name='title' 
                value={title}
                onChange={this.handlechange}
                />
                </div>
                <div>
                <label>body</label>
                <input type='text' 
                name='body' 
                value={body}
                onChange={this.handlechange}
                />
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>    
                
            
        )
    }
}

export default Postreq