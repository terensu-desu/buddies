import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom' //can use HashRouter if running into trouble on builds
import { Security, SecureRoute, ImplicitCallback, withAuth } from '@okta/okta-react'
import Navbar from '../components/Navbar'
import FeaturedPage from '../containers/FeaturedPage'
import LifePage from '../containers/LifePage'
import SupporterPage from '../containers/SupporterPage'
import EventsPage from '../containers/EventsPage'
import Search from '../components/Search'
import LoginPage from '../components/Auth/LoginPage'

const config = {
  issuer: 'https://dev-345698.oktapreview.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oacxjbp9y3dH50cI0h7'
}

export default withAuth(class App extends Component {
  constructor(props) {
    super(props)
    this.state = {authenticated: null}
    this.checkAuthentication = this.checkAuthentication.bind(this)
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated()
    if (authenticated !== this.state.authenticated) {
      this.setState({authenticated})
    }

    try {
      const response = await fetch('http://localhost:{serverPort}/api/messages', {
        headers: {
          Authorization: 'Bearer ' + await this.props.auth.getAccessToken()
        }
      })
      const data = await response.json()
      this.setState({messages:data.messages})
    } catch (err){
      console.log("ERROR REPORT: " + err)
    }
  }

  componentDidUpdate() {
    this.checkAuthentication()
  }

  render() {
    return (
      <Router>
          <Security issuer={config.issuer}
                    client_id={config.clientId}
                    redirect_uri={config.redirect_uri}>
            <Navbar authenticated={this.state.authenticated} />
            <Search />
            <Route exact path="/" component={FeaturedPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/life/:id" component={LifePage} />
            <Route path="/supporter/:id" component={SupporterPage} />
            <Route path="/events/:id" component={EventsPage} />
          </Security>
      </Router>
    )
  }
})