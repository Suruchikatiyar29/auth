import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" exact component={Home} />
        <Route path="/Edit/:id" exact component={Edit} />
      </Switch>
    </>
  );
};

export default App;
