import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
// Can use HashRouter or BrowserRouter if running into trouble on builds
// Use HashRouter over BrowserRouter for GitHub Pages but doesn't work with Okta
// Use BrowserRouter for other builds, due to Okta compatibility (also cleaner).
import { Security } from '@okta/okta-react';

import Main from '../containers/Main';

function onAuthRequired({history}) {
  history.push('/login');
} 
// this function comes from the Okta service template - whenever a child component calls onAuthRequired, this will send the user to the LoginPage component

// App.js declares the Router and Security components. Security issuer is our Okta dev link, client_id also comes from Okta dev page.
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