import { useEffect } from 'react';
import './App.css';
import { Navbar, Nav } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Users from "./Components/Users/Users";
import firebase from "./firebase";

function App() {
  useEffect(() => {
    const msg = firebase.messaging();
    msg.requestPermission().then(() => {
      return msg.getToken();
    }).then((data) => {
      console.warn("messaging token -> ", data);
    });
  }, []);

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
