import React from "react";
import { Box } from "@material-ui/core";
import Homeimage from "../Photos/Reacthome.jpeg";

const Landingpage = () => {
  return (
    <Box>
      <h2 style={createAt}>React Landing Page</h2>
      <img style={imageSt} src={Homeimage} />
    </Box>
  );
};

const createAt = {
  color: "black",
  "font-size": "27px",
  "font-family": "cursive",
  "text-align": "center",
  "text-shadow": "2px 1px #ff71d1",
};
const imageSt = {
  width: "100%",
  height: "602px",
};

export default Landingpage;
