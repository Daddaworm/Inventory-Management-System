import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import ItemLookup from './Components/ItemLookup'
import Orders from './Components/Orders'
import About from './Components/About'
// import { Navbar, Nav } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


const App = () => {

  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/ItemLookup" component={ItemLookup} />
        <Route exact path="/Orders" component={Orders} />
        <Route exact path="/About" component={About} />
      </div>
    </Router>
  )
}

export default App
