import React , {Component} from 'react'

/*const Usingprop = (props) => {

    return (
        <div><h1>hello {props.fname}  {props.lname} </h1>
        {props.children}
        </div>
    )
}*/

class Usingprop extends Component{
    render(){
        return(
            <div>
                <h2>welcome {this.props.fname}  { this.props.lname}</h2>
            </div>
        )
    }
}

export default Usingprop