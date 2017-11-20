import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import OktaSignInWidget from '../OktaSignInWidget'
import { withAuth } from '@okta/okta-react'

export default withAuth(class LoginPage extends Component{
	constructor(props) {
		super(props)
		this.onSuccess = this.onSuccess.bind(this)
		this.onError = this.onError.bind(this)
		this.state = {
			authenticated: null
		}
		this.checkAuthentication()
		/*this.widget = new OktaSignIn({
			baseUrl: 'https://dev-345698.oktapreview.com',
			clientId: '0oacxjbp9y3dH50cI0h7',
			redirectUri: 'http//localhost:3000',
			authParams: {
				responseType: 'id_token'
			}
		})*/
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

	onSuccess(res) {
		return this.props.auth.redirect({
			sessionToken: res.session.token
		})
	}

	onError(err) {
		console.log('error logging in', err)
	}

  render(){
    return this.state.authenticated ?
    <Redirect to="/"/> :
    <OktaSignInWidget baseUrl={this.props.baseUrl} onSuccess={this.onSuccess} onError={this.onError} />
  }
})