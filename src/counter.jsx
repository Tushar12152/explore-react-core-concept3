import { useState } from "react"

export default function Counter(){
    const style={
        backgroundColor:'gray',
        border:'2px solid yellow',
        borderRadius:'20px',
        padding:'5px'

    }

    const btn={
        margin:'5px'
    }

    const [count,setCount]=useState(0)

    const handleClick=()=>{
         const  newcount=count+1
           setCount(newcount)
    }
    const handleClick2=()=>{
        const newCount=count-1;
        setCount(newCount)
    }
    return(
        <div style={style}>
             <h3 >counter:{count}</h3>
             <button onClick={handleClick}>add</button>
             <button onClick={handleClick2} style={btn}>reduce</button>
        </div>
    )
}