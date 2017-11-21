import React, { Component } from 'react'
import Featured from '../components/Featured'
import store from '../store'
import { withAuth } from '@okta/okta-react'

// this will receive state data and send data to Featured.js
export default withAuth(class FeaturedPage extends Component{
	constructor(props) {
		super(props)
    this.state = { authenticated: null }
    this.checkAuthentication = this.checkAuthentication.bind(this)
    this.checkAuthentication()
		this.data = store.getData()
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
		if(this.state.authenticated === null) return null;
		return (
			<Featured lifeData={ this.data.life_data } buddiesData={ this.data.buddies_data } eventData={ this.data.event_data } />
		)
	}
})