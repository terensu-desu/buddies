import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom' //can use HashRouter if running into trouble on builds
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-345698.oktapreview.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oacxjbp9y3dH50cI0h7'
}

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
        <div>
          <Navbar />
          <Main />
        </div>
      </Router>
    )
  }
}

export default App
