import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

// temp
import TempCard from "./components/TempCard";


function App() {
  return (
    <div className="App">
      {/* temp */}
      <TempCard/>

      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
    </div>
  );
}

export default App;
