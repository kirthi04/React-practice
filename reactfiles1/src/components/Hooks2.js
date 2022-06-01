import React, {useState} from 'react'

function Hooks2(){
    const temp=0
    const [count,setCount] = useState(0)
    
    function incre5(){
        var i=0
        for(i=0 ; i<5 ; i++){
            setCount((prev) => {
                return prev+1
            })
        }
    }
    return (
        <div>
            <button onClick = {incre5}>Count Increment 5 {count}</button>
        </div>
    )
}

export default Hooks2