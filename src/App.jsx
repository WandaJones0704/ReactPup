import { Routes, Route, Link } from "react-router-dom";
import AllDogs from "./components/AllDogs";
import SingleDog from "./components/SingleDog";
import Nav from "./components/Nav.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> The Puppy Bowl</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AllDogs />} />
        <Route path="/:id" element={<SingleDog />} />
      </Routes>
    </div>
  );
}

export default App;
