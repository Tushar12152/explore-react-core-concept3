import { useEffect, useState } from "react"
import Friend from "./friend";

export default function Friends(){
    const[friends,setfriend]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setfriend(data))
    },[])


    const style={
        border:'2px solid pink',
        borderRadius:'20px',
        padding:'5px',
        backgroundColor:'blueviolet',
        color:'white'
    }
    return(
        <div style={style}>
            <h2>friends:{friends.length}</h2>
            {
                
                
             friends.map(friend=><Friend friend={friend}></Friend>)
            
        }
        </div>
       
    )
}