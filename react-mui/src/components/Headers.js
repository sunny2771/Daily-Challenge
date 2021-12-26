import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useClasses = makeStyles({
  Header: {
    background: "#111111",
  },
  tabs: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: 20,
  },
});

const Headers = () => {
  const classes = useClasses();

  return (
    <AppBar className={classes.Header} position="static">
      <Toolbar>
        <NavLink className={classes.tabs} to="/">
          ReactLandingPage
        </NavLink>
        &nbsp; &nbsp;
        <NavLink className={classes.tabs} to="/all">
          AllUsers
        </NavLink>
        &nbsp; &nbsp;
        <NavLink className={classes.tabs} to="/add">
          AddUser
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Headers;
