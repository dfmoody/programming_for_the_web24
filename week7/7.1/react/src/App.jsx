import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Camelid from './Camelid';


function App() {
  // create constants: llama and alpaca
  // include properties: image, alt and trivia

  const llama = {
    image: '/llama.jpg',
    alt: 'Llama',
    trivia: 'Llamas are social animals and live in herds. They hum when they are content.',
  };
  
  const alpaca = {
    image: '/alpaca.jpg',
    alt: 'Alpaca',
    trivia: 'Alpacas are bred specifically for their fiber. They come in more than 22 natural colors.',
  };

  // return a div with the Camelid components
  // include properties based on llama and alpaca objects
  return (
    <>
    <div className='info'>
      <Camelid image={llama.image} alt={llama.alt} trivia={llama.trivia} />
      <Camelid image={alpaca.image} alt={alpaca.alt} trivia={alpaca.trivia} />
    </div>
    </>
  )
}

export default App
