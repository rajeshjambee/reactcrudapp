import React from 'react';
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from "react-router-dom";
import AddUser from "./user/AddUser";
import EditUser from "./user/EditUser";
import ViewUser from "./user/ViewUser";

function App() {
  return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/adduser" component={AddUser} />
          <Route exact path="/user/edituser/:id" component={EditUser} />
          <Route exact path="/user/viewuser/:id" component={ViewUser} />
        </Switch>
      </>
  );
}

export default App;
