import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      

      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}></Route>
          <Route path="/register" exact element={<Register/>}></Route>
          <Route path="/home" exact element={<Home/>}></Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
