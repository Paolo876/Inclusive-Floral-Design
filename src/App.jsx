import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

// temp
import TempCard from "./components/TempCard";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      {/* temp */}
      <TempCard/>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
    </div>
  );
}

export default App;
