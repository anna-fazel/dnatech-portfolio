import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route path="/slider">
            <Slider />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
       
        </Switch>
        
        <Footer />
      
      </div>
    </Router>
  );
}

export default App;
