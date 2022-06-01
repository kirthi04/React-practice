import React from 'react'
import Seper from './Seper'

const Listren = () =>{
    const person = [{id:1 , name : 'kiru'} , {id:2 , name : 'thiga'}]
   // const personli = person.map((person) => (<h2>{person.id} and name is {person.name}</h2>))
   const personli = person.map((person) => <Seper key={person.id} person={person} />) 
   return(
        <div>
           {personli} 
        </div>
    )
    
}

export default Listren