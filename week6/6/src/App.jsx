import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const dogFact1 = "Dogs like food";
  const dogFact2 = "Dogs like to play";
  const dogCondtionTrue = "Dogs like to sleep";
  const dogConditionFalse = "Dogs don't like to sleep";
  const dogLikes = "car ride";

  const myString = "Hello, World";
  const myArray = ["thing", "other thing", "last thing"]
  return (
    <>
      <div>
        {/* what I added */}

        <h1>Hello World</h1>
        <ul>
          <li>{dogFact1}</li>
          <li>{dogFact2}</li>
          <li>
            {dogLikes !== "car ride" ? (<div>dogConditionTrue</div>) : (<div>dogConditionFalse</div>)}
          </li>
        </ul>
        {myString}
        {myArray[1]}
        {myArray.map((item) => {
          return (<div>{item}</div>)
        })}
        {/* condition ? true : false */}
        {myString !== "Hello, World" ? (<div>{myArray[0]}</div>): (<div>This was false</div>)} 
        
        
        
        {/* additional app elements */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
