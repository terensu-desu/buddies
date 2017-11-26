import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom' //can use HashRouter or BrowserRouter if running into trouble on builds
import Navbar from '../components/Navbar'
import FeaturedPage from '../containers/FeaturedPage'
import DetailPageFilter from '../containers/DetailPageFilter'
import Search from '../components/Search'
import BrowsePageFilter from '../containers/BrowsePageFilter'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Navbar />
            <Search />
            <Route exact path="/" component={FeaturedPage} />
            <Route path="/details/:page/:id" component={DetailPageFilter} />
            <Route path="/browse/:filter" component={BrowsePageFilter} />
        </div>
      </Router>
    )
  }
}

/* Keeping Okta things commented out until PR#51 goes npm.
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import { withAuth } from '@okta/okta-react'
import Protected from '../components/Protected'
import LoginPage from '../components/LoginPage'

function onAuthRequired({history}) {
  history.push('/login')
}

export default withAuth(

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
          <Security issuer="https://dev-345698.oktapreview.com/oauth2/default"
                              client_id="0oacxjbp9y3dH50cI0h7"
                              redirect_uri={window.location.origin + '/implicit/callback'}
                              onAuthRequired={onAuthRequired} >
            <SecureRoute path="/protected" component={Protected} />
            <Route path="/login" render={() => <LoginPage baseUrl="https://dev-345698.oktapreview.com" />} />
            <Route path="/implicit/callback" component={ImplicitCallback} />
          </Security>
)
*/