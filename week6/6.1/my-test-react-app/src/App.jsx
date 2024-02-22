import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // conditional (variable && (if true condition))
  const happy = true;
  // turnerary (variable ? (if true condition) : (if false condition))

  return (
    <>
      <div>
        Hello World
        {happy && (<div>I am Happy</div>)}
        {happy ? (<div>I am Happy</div>) : (<div>I am not happy</div>)}
      </div>
    </>
  )
}

export default App
