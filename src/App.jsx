import './App.css'
import Counter from './counter'
import Friends from './friends'
import Team from './team'
import Users from './users'

function App() {
   
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2=()=>{
    alert('button 2 clicked')
  }

  return (
    <>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <h2>React core concept 2</h2>

      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click 2</button>
      <button onClick={()=>alert('third clicked')}>click 3</button>
    </>
  )
}

export default App
