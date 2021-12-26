// Here, I created the React app with the use of Material-UI which is react framework and performs the crud opeartions on the data which is coming from json server. Here I used Json Server to store the data. And running both the react app and json server at the same time by using concurrently npm.

import React from "react";
import Headers from "./components/Headers";
import Landingpage from "./components/Landingpage";
import Adduser from "./components/Adduser";
import Allusers from "./components/Allusers";
import Notfound from "./components/Notfound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Headers />
      <Switch>
        <Route exact path="/">
          <Landingpage />
        </Route>
        <Route exact path="/all">
          <Allusers />
        </Route>
        <Route exact path="/add">
          <Adduser />
        </Route>
        <Route>
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
