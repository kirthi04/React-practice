import React from 'react'
const Greet = (props) => {

function changething(){
console.log("button clicked")
}
    return (
        <div><h1>hello {props.name} </h1>
        <button onClick={changething}>Click</button>
        </div>
    )
}

export default Greet