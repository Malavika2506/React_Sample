import React from "react";
import "./Home.css";
import Secondslide from "./Secondslide";
import Thirdslide from "./Thirdslide";
import Sampleusestate from "./Sampleusestate";
import Sampleuseffect from "./Sampleuseffect";
import UseEffectProblems from "./UseEffectProblems";

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
      <Sampleusestate />
      <Sampleuseffect />
    </>
  );
}

export default Home;
