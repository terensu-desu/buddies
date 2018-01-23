import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
// Use BrowserRouter for the HTML5 support and also due to Okta compatibility.
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
      <Router basename={process.env.PUBLIC_URL}>
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