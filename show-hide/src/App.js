// This is the small project about show and hide components in react using Usestate hook. Here I'm using button to show and hide the cakes images.

import React, { useState } from "react";
import chocolateImg from "./photos/chocolate.jpg";
import vanillaImg from "./photos/vanilla.jpg";
import strawberryImg from "./photos/strawberry.jpg";
import blueberryImg from "./photos/blueberry.jpg";
const cakes = ["Chocolate", "Vanilla", "Strawberry", "Blueberry"];

const App = () => {
  const [mycake, setmyCake] = useState("");
  return (
    <div className="App" style={appStyle}>
      <h1>This is a project on show and hide of the components</h1>
      <h2>click to display the cakes.</h2>
      <div className="btn-group" aria-label="basic example" role="group">
        {cakes.map((cake) => (
          <button
            style={setBtn}
            onClick={() => {
              setmyCake(cake);
            }}
          >
            {cake}
          </button>
        ))}
      </div>
      <div>
        <p>{mycake}</p>
      </div>
      <div>
        {mycake === "Chocolate" ? (
          <img
            style={{ height: "336px", width: "350px", "border-radius": "18px" }}
            src={chocolateImg}
            alt="chocolate image"
          />
        ) : (
          ""
        )}
        {mycake === "Vanilla" ? (
          <img
            style={{ height: "336px", width: "350px", "border-radius": "18px" }}
            src={vanillaImg}
            alt="vanilla image"
          />
        ) : (
          ""
        )}
        {mycake === "Strawberry" ? (
          <img
            style={{ height: "336px", width: "400px", "border-radius": "18px" }}
            src={strawberryImg}
            alt="strawberry image"
          />
        ) : (
          ""
        )}
        {mycake === "Blueberry" ? (
          <img
            style={{ height: "336px", width: "350px", "border-radius": "18px" }}
            src={blueberryImg}
            alt="blueberry image"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const setBtn = {
  color: "white",
  "font-size": "27px",
  "background-color": "#8543c3",
  border: "3px solid darkred",
  "border-radius": "6px",
  margin: "10px 7px",
  cursor: "pointer",
};
const appStyle = {
  "text-align": "center",
  padding: "0%",
  width: "100%",
  "margin-top": "84px",
  height: "100%",
};

export default App;
