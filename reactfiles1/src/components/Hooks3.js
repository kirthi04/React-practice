import React, {useState} from 'react'

function Hooks3(){
    
    const [name,setName] = useState({fname:'' , lname : ''})
    
    
    return (
        <div>
            <form>
                <input type='text' value={name.fname} 
                onChange={(e) => setName({ ...name , fname : e.target.value})} />
                <input type='text' value={name.lname} 
                onChange={(e) => setName({ ...name , lname : e.target.value})} />
            </form>

            <h1>Name is {name.fname} {name.lname}</h1>
        </div>
    )
}

export default Hooks3