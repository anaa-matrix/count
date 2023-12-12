import React , {useState} from "react"
import './App.css';

function App() {
  
  const [count, setCount] = useState(0);

  function minus(){
    // if (count === 0) {
    //   alert("Can't go below 0")
   
      setCount(count - 1);
    
  }

  function add(){
    setCount(count + 1);
  }



  return (
    <div className="App">
      <h1 className="App-title">Counter App</h1>

      <div className="counter">
            <button className="counter--minus" onClick = {minus}>–</button>
            <div className="counter--count">
                <h3>{count}</h3>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>

    </div>
  );
}

export default App;
