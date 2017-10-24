import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom' //can use HashRouter if running into trouble on builds
import Navbar from '../components/Navbar'
import Main from '../components/Main'

class App extends Component {
  constructor() {
    super()
    this.state = {
      japanese: true,
      loggedIn: false,
      user: ""
    }
  }
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Navbar />
          <Main />
        </div>
      </Router>
    )
  }
}

export default App
