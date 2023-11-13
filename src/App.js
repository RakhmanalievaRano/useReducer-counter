 import './App.css';
 import {useState , useReducer} from "react"

 const reducer = (state , action) => {
  if(action.type === 'increment'){
    return state + 1
  }
  if(action.type === 'decrement'){
    return state - 1
  }
  return state
 }

function App() {
  
  const [count , dispatch] = useReducer(reducer , 0)
  return (
 <div className="App">
   <h1>useReducer Hook</h1>
   <button onClick={()=>dispatch({type:"increment"})}>add one</button>
   <h1>Counter:{count}</h1>
   <button onClick={()=>dispatch({type:"decrement"})}>remove one</button>
 </div>
  );
}

export default App;
