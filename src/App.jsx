import React from "react";
import "./App.css";
// import Cards from './Pages/Cards';
// import Sampleprops from './Pages/Sampleprops';
// import myimage from './assets/pic1.png'
// import ShoppingList from './Pages/ShoppingList';
// import Movie from './Pages/Movie';
// import Table from "./Pages/Table";
import Navbar from "./Pages/Navbar";
// import Counter from './Pages/Counter';
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Secondslide from "./Pages/Secondslide";
import Thirdslide from "./Pages/Thirdslide";

function App() {
 return (
  <>
    <Router>
            <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designers" element={<Secondslide />} />
        <Route path="/Trends" element={<Thirdslide />} />
        <Route path="/Blog" element={<Thirdslide />} />
        <Route path="/About" element={<Thirdslide />} />
      </Routes>
    </Router>
  </>
);

}
export default App;
