
import './App.css';
import  React,{useState} from "react"


function App() {
  const [count,  setCount]=useState(0)
  return (
    <div className="App">
      <div className="container">
        <h1>  {count} </h1>
        <button className="inc"  onClick={() => { setCount(count + 1); console.log(count);}}> + </button>
        <button className="dec"  disabled={ count===0} onClick={() => { setCount(count-1)}}> - </button>
        <br/>
        <button className="res" disabled={count === 0} onClick={() => { setCount(0) }}> Reset </button>
      </div>
    </div>
  );
}

export default App;
