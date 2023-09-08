import { useState } from "react"

export default function Team(){
    const style={
        border:'2px solid green',
        borderRadius:'20px',
        margin:'5px',
        padding:'5px',
        backgroundColor:'violet'
    }
    const[count,setCount]=useState(11)
    const handleClick=()=>{
       const newCount=count+1;
       setCount(newCount)
    }

    const handleClick2=()=>{
        const newCount=count-1;
        setCount(newCount)
    }

    return(
        <div style={style}>
            <h2>Player: {count}</h2>
            <button onClick={handleClick} style={{margin:'5px'}}>+</button>
            <button onClick={handleClick2}>-</button>
        </div>
    )
}