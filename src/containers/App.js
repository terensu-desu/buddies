import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom' //can use HashRouter if running into trouble on builds
import { Security, SecureRoute, ImplicitCallback, withAuth } from '@okta/okta-react'
import Navbar from '../components/Navbar'
import FeaturedPage from '../containers/FeaturedPage'
import LifePage from '../containers/LifePage'
import SupporterPage from '../containers/SupporterPage'
import EventsPage from '../containers/EventsPage'
import Search from '../components/Search'
import Protected from '../components/Protected'
import LoginPage from '../components/LoginPage'

const config = {
  issuer: 'https://dev-345698.oktapreview.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oacxjbp9y3dH50cI0h7'
}

function onAuthRequired({history}) {
  history.push('/login')
}

export default withAuth(class App extends Component {
  constructor(props) {
    super(props)
    this.state = { authenticated: null }
    this.checkAuthentication = this.checkAuthentication.bind(this)
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated()
    if(authenticated !== this.state.authenticated) {
      this.setState({ authenticated })
    }
  }

  componentDidUpdate() {
    this.checkAuthentication()
  }

  render() {
    return (
      <Router>
          <Security issuer={config.issuer} client_id={config.clientId} redirect_uri={config.redirect_uri}>
            <Navbar authenticated={this.state.authenticated} />
            <Search />
            <Route exact path="/" component={FeaturedPage} />
            <SecureRoute path="/protected" component={Protected} />
            <Route path="/login" render={() => <LoginPage baseUrl="https://dev-345698.oktapreview.com" />} />
            <Route path="/implicit/callback" component={ImplicitCallback} />
            <Route path="/life/:id" component={LifePage} />
            <Route path="/buddies/:id" component={SupporterPage} />
            <Route path="/events/:id" component={EventsPage} />
          </Security>
      </Router>
    )
  }
})