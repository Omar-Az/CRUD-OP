import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import todos from "./components/todos";
import about from "./components/about";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          CRUD Tutorial
        </a>

        <Link to="" />
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/xyz"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            {/* <Link to={"/add"} className="nav-link">
              Add
            </Link> */}
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/abc"]} component={todos} />
          <Route path={"/xyz"} component={about} />

          {/* <Route exact path={["/", "/tutorials"]} component={TutorialsList} /> */}
          {/* <Route exact path="/add" component={AddTutorial} /> */}
          {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
