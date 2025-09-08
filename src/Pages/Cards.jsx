import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <>
      <div className="text-center mt-4">
        <h1 className="heading">MERN STACK DEVELOPER</h1>
        <p className="paragraph">
          A MERN developer is a full-stack web developer skilled in the MERN
          stack (MongoDB, Express.js, React, Node.js), a JavaScript-based
          ecosystem for building both the front-end and back-end of web
          applications. This developer handles the entire development process,
          from UI design with React to server-side logic with Node.js/Express.js
          and database management with MongoDB. They leverage JavaScript across
          the entire stack, enabling efficient, scalable, and modern web
          application development.
        </p>
      </div>

      <div className="container cardsection">
        <div className="row justify-content-center mt-4">

          <div className="col-md-3 mb-4 px-1">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">MongoDB</h5>
                <p className="card-text">
                  MongoDB is a NoSQL database that stores data in a flexible,
                  JSON-like format, making it easy to scale.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4 px-1">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">Express.js</h5>
                <p className="card-text">
                  Express.js is a lightweight web application framework for
                  Node.js that helps build APIs and server-side apps.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4 px-1">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">React</h5>
                <p className="card-text">
                  React is a JavaScript library for building dynamic user
                  interfaces with reusable components.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4 px-1">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">Node.js</h5>
                <p className="card-text">
                  Node.js is a runtime environment that lets you run JavaScript
                  on the server, ideal for scalable apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
