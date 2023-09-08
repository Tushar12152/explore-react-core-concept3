export default function Friend(friend){
    const style={
        border:"2px solid pink",
        margin:'15px',
        padding:'20px',
        borderRadius:'20px',
        backgroundColor:'violet'

    }
    console.log()
    const {name,email,username,website}=friend.friend
    return(
        <div style={style}>
             <h3>name:{name}</h3>
             <h4>email:{email}</h4>
             <h4>username:{username}</h4>
             <h4>website:{website}</h4>
        </div>
    )
}