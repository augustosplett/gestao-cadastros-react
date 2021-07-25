import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import Clientes from "./Pages/Clientes"
import Produtos from "./Pages/Produtos"

const Routes = () =>{
    return(
        <Router >
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/clients" exact component={Clientes} />
                <Route path="/products" exact component={Produtos} />
            </Switch>
        </Router>
    )
}

export default Routes;