import { Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home/Home";

// temp
import TempCard from "./components/TempCard";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="app">
      {/* temp */}
      {/* <TempCard/> */}
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
    </div>
  );
}

export default App;
