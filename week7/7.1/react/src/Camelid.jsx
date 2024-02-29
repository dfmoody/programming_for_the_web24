import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Define a functional component called Camelid
// include propeties as an argument.
const Camelid = (props) => {
    return (
      <div>
        <img src={props.image} alt={props.alt} className='camelid-image' />
        <p>{props.trivia}</p>
      </div>
    );
  };
  
  export default Camelid;