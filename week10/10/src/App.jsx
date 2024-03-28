import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Car } from "./views/Car";
import './App.css'
import carData from "./assets/car-list.json";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":slug" element={<Car data={carData} />} />
    </Routes>
    </>
  )
}

export default App