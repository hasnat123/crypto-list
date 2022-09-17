import React from "react";
import Home from "./Routes/Home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CoinInfo from "./Routes/CoinInfo/CoinInfo";

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