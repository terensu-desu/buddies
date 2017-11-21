import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom' //can use HashRouter if running into trouble on builds
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import Navbar from '../components/Navbar'
import FeaturedPage from '../containers/FeaturedPage'
import LifePage from '../containers/LifePage'
import SupporterPage from '../containers/SupporterPage'
import EventsPage from '../containers/EventsPage'
import Search from '../components/Search'
import Protected from '../components/Protected'
import LoginPage from '../components/LoginPage'

function onAuthRequired({history}) {
  history.push('/login')
}

class App extends Component {
  render() {
    return (
      <Router>
          <Security issuer="https://dev-345698.oktapreview.com/oauth2/default"
                    client_id="0oacxjbp9y3dH50cI0h7"
                    redirect_uri={window.location.origin + '/implicit/callback'}
                    onAuthRequired={onAuthRequired} >
            <Navbar />
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
}

export default App