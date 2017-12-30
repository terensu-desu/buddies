// This component was made just in case I needed to split App.js apart. Doesn't appear to be necessary.

import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import { withAuth } from '@okta/okta-react';

import Navbar from './Navbar';
import FeaturedPage from '../containers/FeaturedPage';
import DetailPageFilter from '../containers/DetailPageFilter';
import BrowsePageFilter from '../containers/BrowsePageFilter';
import Search from './Search';
import LoginPage from './LoginPage';
import Protected from './Protected';

function onAuthRequired({history}) {
  history.push('/login')
}

export default withAuth(class Main extends Component{
	constructor() {
    super();
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

	render() {
		return (
			<Router>
				<Security issuer="https://dev-345698.oktapreview.com/oauth2/default"
	                client_id="0oacxjbp9y3dH50cI0h7"
	                redirect_uri={window.location.origin + '/implicit/callback'}
	                onAuthRequired={onAuthRequired} >
	        <Navbar lang={this.props.language} changeLanguage={this.changeLanguage} />
	        <Search lang={this.props.language} />
					<Route exact path="/" render={() => <FeaturedPage lang={this.props.language} />} />
	        <Route path="/browse/:filter" render={({match}) => <BrowsePageFilter match={match} lang={this.props.language} />} />
	        <Route path="/details/:section/:page/:id" render={({match}) => <DetailPageFilter match={match} lang={this.props.language} />} />
	        <Route path="/login" render={() => <LoginPage baseUrl="https://dev-345698.oktapreview.com" />} />
	        <Route path="/implicit/callback" component={ImplicitCallback} />
	        <SecureRoute path="/protected" component={Protected} />
				</Security>
			</Router>
		)
	}
});