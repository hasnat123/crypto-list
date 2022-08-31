import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CoinInfo from "./components/CoinInfo";

function App() {

  return(
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<CoinInfo/>} />
        </Routes>
      </div>
    </Router>

  )
}

export default App;