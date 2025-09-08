import React from "react";
import "./Thirdslide.css";
import tableImg from "../assets/Interior.png"; // replace with your Drop Table image

function Thirdslide() {
  return (
    <div className="thirdslide">
      <div className="thirdslide-content">
        <h2>Drop Table</h2>
        <h4 className="subtitle">The Black edition</h4>
        <p>
          It is a long established fact that a reader will be distracted
          by the readable content of a. It is a long established fact
          that a reader will be distracted by the readable content of a.
          It is a long established fact that a reader will be...
        </p>
        <button className="btn-view">View Product</button>
      </div>

      <div className="thirdslide-image">
        <img src={tableImg} alt="Drop Table" />
      </div>
    </div>
  );
}

export default Thirdslide;
