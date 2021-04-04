// import React from 'react';
import './App.css';
import { Navbar, Nav } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Users from "./Users/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/users" exact component={Users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
