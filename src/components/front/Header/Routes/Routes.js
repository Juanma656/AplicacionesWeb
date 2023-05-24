import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";

const Routes = ({ productItems }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Products productItems={productItems} />
        </Route>
        <Route path="/signup" exact>
          <Signup/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;