import React from "react";
import "./Secondslide.css";
import background from "../assets/2ND.png"; // background image

function Secondslide() {
  return (
    <div
      className="secondslide"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay-content">
        <h2>Modern art</h2>
        <p>
          It is a long established fact that a reader will be distracted
          by the readable content of a.
        </p>
        <button className="btn-view">View All</button>
      </div>
    </div>
  );
}

export default Secondslide;
