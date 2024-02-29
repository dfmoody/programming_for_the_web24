import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // conditional (variable && (if true condition))
  // ternerary (variable ? (if true condition) : (if false condition))
  const llamaFacts = [
    "Llamas are actually from the same family as camels.",
    "Llamas are much more friendly than alpacas.",
    "Llamas speak to each other by humming.",
    "When irritated, llamas can spit distances of over 15 feet!",
  ];
  const twoFacts = "Here are two great facts about Llamas:"

  return (
    <>
      <div className="llama_box">
      <h1>Amazing Llamas</h1>
      <h2>{twoFacts}</h2>
      <h3>
        {/* ternerary variable */}
        {/* ternerary condition if there are no facts, lets the user know there are no llama facts */}
        {/* ternerary condition if its only 1 llama fact than display one */}
        {/* ternerary regular condition, displays last two facts */}
        {llamaFacts.length === 0 ? 
        (<p>No llama facts available</p>) 
        : llamaFacts.length === 1 ? 
        (<p>{llamaFacts[0]}</p>) : 
        (
          <>
            <p>{llamaFacts[llamaFacts.length - 2]}</p>
            <p>{llamaFacts[llamaFacts.length - 1]}</p>
          </>
        )}
      </h3>
      </div>
    </>
  )
}

export default App