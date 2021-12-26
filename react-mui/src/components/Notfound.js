import React from "react";
import Errorpage from "../Photos/Errorpage.jpg";
const Notfound = () => {
  return (
    <div>
      <img style={notStyle} src={Errorpage} alt="Errorpage" />
    </div>
  );
};

const notStyle = {
  width: "80%",
  position: "relative",
  height: "625px",
  left: "182px",
};

export default Notfound;
