import React , {Component} from 'react'

const Destp = ({fname,lname}) => {
    //const {fname,lname} = props
    return (
        <div><h1>hello {fname}  {lname} </h1>
         
        </div>
    )
}

/*class Usingprop extends Component{
    render(){
        return(
            <div>
                <h2>welcome {this.props.fname}  { this.props.lname}</h2>
            </div>
        )
    }
}*/

export default Destp