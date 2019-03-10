import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";

import Login from "../Auth/Login";
import Register from "../Auth/Register";

import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/" component={Home} exact />
    <PrivateRoutes path="/dashboard" component={Dashboard} exact />
    <Route path="/about" component={About} exact />
    <Route path="/contact" component={Contact} exact />
  </Switch>
);

export default Routes;
