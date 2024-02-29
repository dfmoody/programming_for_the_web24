import { useState } from 'react'
import './App.css'
import Camelid from './components/Camelid';


function App() {
  // create constant camelidInfo
  // include properties: name, image, alt and trivia
  const camelidInfo = [
    {name: 'The Llama', image: '../dist/llama.jpg', alt: 'Llama', trivia: 'Llamas are social animals and live in herds. They hum when they are content.'},
    {name: 'The Alpaca', image: '../dist/alpaca.jpg',alt: 'Alpaca', trivia: 'Alpacas are bred specifically for their fiber. There are 22 natural colors of Alpaca.'
    }    
  ]
  // return a div with the Camelid components
  // include properties based on camelidInfo
  return (
    <>
    <div className='info'>
      <h1>Llamas and Alpacas</h1>
      <div className='camelidCard'>
      <Camelid
      name={camelidInfo[0].name}
      image={camelidInfo[0].image} 
      alt={camelidInfo[0].alt} 
      trivia={camelidInfo[0].trivia} />
      </div>
      <div className='camelidCard'>
      <Camelid 
      name={camelidInfo[1].name}
      image={camelidInfo[1].image} 
      alt={camelidInfo[1].alt} 
      trivia={camelidInfo[1].trivia} />        
      </div>
    </div>
    </>
  )
}

export default App
