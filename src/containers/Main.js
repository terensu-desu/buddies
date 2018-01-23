import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import { withAuth } from '@okta/okta-react';

import Navbar from '../components/Navbar';
import Search from '../components/Search';
import FeaturedPage from './FeaturedPage';
import DetailPageFilter from './DetailPageFilter';
import BrowsePageFilter from './BrowsePageFilter';
import Recommended from '../components/Recommended';
import LoginPage from '../components/LoginPage';
import Protected from '../components/Protected';

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

  // checkAuthentication is provided by Okta service. Checks for and sets authenticated state, which can be used across the app.
  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if(authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  // if there were updates, checkAuthentication again.
  componentDidUpdate() {
    this.checkAuthentication();
  }

  // onSuccess and onError are provided by Okta service, handles the OktaSignInWidget service called by LoginPage.
	onSuccess(res) {
		return this.props.auth.redirect({
			sessionToken: res.session.token
		});
	}

	onError(err) {
		console.log('error logging in', err);
	}

  // changeLanguage allows for users to change their language on the fly. Currently we have to manually translate each listing, but in the future we could
  // allow for users to provide translated information themselves when they create a listing. For example: "Event name (JA): ____" "Event name (EN): ____"
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
        <Route path="/recommended" component={Recommended} />
        <Route path="/login" render={() => <LoginPage baseUrl="https://dev-345698.oktapreview.com" authenticated={this.state.authenticated} onSuccess={this.onSuccess} onError={this.onError} />} />
        <Route path="/implicit/callback" component={ImplicitCallback} />
        <SecureRoute path="/protected" component={Protected} />
			</div>
		)
	}
});