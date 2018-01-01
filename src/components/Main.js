import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// Can use HashRouter or BrowserRouter if running into trouble on builds
// Use HashRouter over BrowserRouter for GitHub Pages but doesn't work with Okta
// Use BrowserRouter for other builds, due to Okta compatibility (also cleaner).

import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import { withAuth } from '@okta/okta-react';

import Navbar from './Navbar';
import FeaturedPage from '../containers/FeaturedPage';
import DetailPageFilter from '../containers/DetailPageFilter';
import BrowsePageFilter from '../containers/BrowsePageFilter';
import Search from './Search';
import LoginPage from './LoginPage';
import Protected from './Protected';

export default withAuth(class Main extends Component{
	constructor(props) {
    super(props);
    this.state = {
      language: "japanese",
      authenticated: null
    };
    this.changeLanguage = this.changeLanguage.bind(this);
    this.checkAuthentication = this.checkAuthentication.bind(this);
		this.onSuccess = this.onSuccess.bind(this);
		this.onError = this.onError.bind(this);
    this.checkAuthentication();
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

	onSuccess(res) {
		return this.props.auth.redirect({
			sessionToken: res.session.token
		});
	}

	onError(err) {
		console.log('error logging in', err);
	}

  changeLanguage(newLanguage) {
    this.setState({
      language: newLanguage
    });
  }

	render() {
		return (
			<div>
        <Navbar lang={this.state.language} changeLanguage={this.changeLanguage} authenticated={this.state.authenticated} logout={this.props.auth.logout}/>
        <Search lang={this.state.language} />
				<Route exact path="/" render={() => <FeaturedPage lang={this.state.language} />} />
        <Route path="/browse/:filter" render={({match}) => <BrowsePageFilter match={match} lang={this.state.language} />} />
        <Route path="/details/:section/:page/:id" render={({match}) => <DetailPageFilter match={match} lang={this.state.language} />} />
        <Route path="/login" render={() => <LoginPage baseUrl="https://dev-345698.oktapreview.com" authenticated={this.state.authenticated} onSuccess={this.onSuccess} onError={this.onError} />} />
        <Route path="/implicit/callback" component={ImplicitCallback} />
        <SecureRoute path="/protected" component={Protected} />
			</div>
		)
	}
});


/*

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

*/