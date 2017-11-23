import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom' //can use HashRouter if running into trouble on builds
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import { withAuth } from '@okta/okta-react'
import Navbar from '../components/Navbar'
import FeaturedPage from '../containers/FeaturedPage'
import DetailPageFilter from '../containers/DetailPageFilter'
import Search from '../components/Search'
import Protected from '../components/Protected'
import LoginPage from '../components/LoginPage'

function onAuthRequired({history}) {
  history.push('/login')
}

export default withAuth(class App extends Component {
  constructor(props) {
    super(props)
    this.state = { authenticated: null }
    this.checkAuthentication = this.checkAuthentication.bind(this)
    //this.checkAuthentication()
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
          <Security issuer="https://dev-345698.oktapreview.com/oauth2/default"
                    client_id="0oacxjbp9y3dH50cI0h7"
                    redirect_uri={window.location.origin + '/implicit/callback'}
                    onAuthRequired={onAuthRequired} >
            <Navbar authentication={this.state.authenticated} />
            <Search />
            <Route exact path="/" component={FeaturedPage} />
            <Route exact path="/:page/:id" component={DetailPageFilter} />
            <SecureRoute path="/protected" component={Protected} />
            <Route path="/login" render={() => <LoginPage baseUrl="https://dev-345698.oktapreview.com" />} />
            <Route path="/implicit/callback" component={ImplicitCallback} />
          </Security>
      </Router>
    )
  }
})