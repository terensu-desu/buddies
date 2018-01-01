import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
// Can use HashRouter or BrowserRouter if running into trouble on builds
// Use HashRouter over BrowserRouter for GitHub Pages but doesn't work with Okta
// Use BrowserRouter for other builds, due to Okta compatibility (also cleaner).
import { Security } from '@okta/okta-react';

import Main from '../components/Main';

function onAuthRequired({history}) {
  history.push('/login');
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer="https://dev-345698.oktapreview.com/oauth2/default"
                  client_id="0oacxjbp9y3dH50cI0h7"
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
          <Main />
        </Security>
      </Router>
    );
  };
}

/* Backup of Okta settings
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import { withAuth } from '@okta/okta-react';

import Protected from '../components/Protected';
import LoginPage from '../components/LoginPage';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import FeaturedPage from '../containers/FeaturedPage';
import DetailPageFilter from '../containers/DetailPageFilter';
import BrowsePageFilter from '../containers/BrowsePageFilter';


function onAuthRequired({history}) {
  history.push('/login');
}

export default withAuth(

constructor(props) {
    super(props);
    this.state = {
      language: "japanese",
      authenticated: null
    };
    this.changeLanguage = this.changeLanguage.bind(this);
    this.checkAuthentication = this.checkAuthentication.bind(this);
    //this.checkAuthentication();
  }
  
  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if(authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

        <Security issuer="https://dev-345698.oktapreview.com/oauth2/default"
                                      client_id="0oacxjbp9y3dH50cI0h7"
                                      redirect_uri={window.location.origin + '/implicit/callback'}
                                      onAuthRequired={onAuthRequired} >

          <Navbar lang={this.state.language} changeLanguage={this.changeLanguage} />
          <Search lang={this.state.language} />
          <Route exact path="/" render={() => <FeaturedPage lang={this.state.language} />} />
          <Route path="/browse/:filter" render={({match}) => <BrowsePageFilter match={match} lang={this.state.language} />} />
          <Route path="/details/:section/:page/:id" render={({match}) => <DetailPageFilter match={match} lang={this.state.language} />} />
          <SecureRoute path="/protected" component={Protected} />
          <Route path="/login" render={() => <LoginPage baseUrl="https://dev-345698.oktapreview.com" updateAuthentication={this.updateAuthentication} />} />
          <Route path="/implicit/callback" component={ImplicitCallback} />

        </Security>
)
*/