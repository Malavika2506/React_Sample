import React from "react";
import "./App.css";
// import Cards from './Pages/Cards';
// import Sampleprops from './Pages/Sampleprops';
// import myimage from './assets/pic1.png'
// import ShoppingList from './Pages/ShoppingList';
// import Movie from './Pages/Movie';
// import Table from "./Pages/Table";
// import Navbar from "./Pages/Navbar";
// import Counter from './Pages/Counter';
// import Home from "./Pages/Home";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Secondslide from "./Pages/Secondslide";
// import Thirdslide from "./Pages/Thirdslide";
// import Sampleusestate from "./Pages/Sampleusestate";
// import Sampleuseffect from "./Pages/Sampleuseffect";
// import UseEffectProblems from "./Pages/UseEffectProblems";
// import FruitOptimizer from "./Pages/FruitOptimizer";
import Todo from "./Pages/Todo";

function App() {
  return (
    <>

    <Todo />

    {/* <FruitOptimizer /> */}


      {/* <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designers" element={<Secondslide />} />
          <Route path="/Trends" element={<Thirdslide />} />
          <Route path="/Blog" element={<Sampleusestate />} />
          <Route path="/About" element={<Sampleuseffect />} />
        </Routes>
      </Router> */}
    </>
  );
}
export default App;
