import React, {useState} from 'react'

function Hooks4(){
    
    const [items,setItem] = useState([])
    
    const addItem = () => {
        setItem([ ... items, {
            id: items.length,
            value: Math.random()
        }])
    }
    
    return (
        <div>
            <button onClick={addItem}></button>
            <ul>
                {
                    items.map((item) => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Hooks4