import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "../Products/Products";

const Routes = ({ productItems }) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products productItems={productItems} />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;