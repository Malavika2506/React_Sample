import React from "react";
import "./Home.css";
import background from "../assets/background.png";
import Secondslide from "./Secondslide";
import Thirdslide from "./Thirdslide";
import Navbar from "./Navbar";

function Home() {
  return (
    <>

      <div className="home">
        <div className="home-text">
          <h1>FURNITURE</h1>
          <h1>DESIGN</h1>
        </div>
      </div>
            <Secondslide />
                  <Thirdslide />


    </>
  );
}

export default Home;
