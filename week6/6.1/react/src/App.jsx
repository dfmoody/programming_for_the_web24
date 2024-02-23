import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // conditional (variable && (if true condition))
  // turnerary (variable ? (if true condition) : (if false condition))
  const appFact1 = "control click on the 'react' folder and 'open integrated terminal' ";
  const appFact2 = "in the terminal type 'npm run build' to update the dist folder";
  const appFact3 = "in the terminal type 'npm run dev' to open up a live preview of the app";
  const appFact4 = "to upload correctly to github, delete 'dist' from the .gitignore list";
  const appFact5 = "to create a working link for github make sure to edit the vite.configure and add the following to the export default - base: ''./''";
  const success = true;

  return (
    <>
      <h1>Hello World!!!</h1>
      <h2>Things I learned to help the vite/react app work</h2>
        <ul>
          <li>{appFact1}</li>
          <li>{appFact2}</li>
          <li>{appFact3}</li>
          <li>{appFact4}</li>
          <li>{appFact5}</li>
        </ul>
      <div>
        Did it take me more than 5 tries to complete this asssignment?
        {success && (<h3>Yes, it took about 10 tries.</h3>)}
        {success ? (<h3>But I got it to work!</h3>) : (<div>But I got it to work!</div>)}
      </div>
    </>
  )
}

export default App
