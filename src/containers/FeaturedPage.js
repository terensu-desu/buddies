import React, { Component } from 'react'
import Featured from '../components/Featured'
import store from '../store'

// this will receive state data and send data to Featured.js
class FeaturedPage extends Component{
	constructor() {
		super()
		this.data = store.getData()
	}

	render() {
		return (
			<Featured lifeData={ this.data.life_data } supporterData={ this.data.supporter_data } eventData={ this.data.event_data } />
		)
	}
}

export default FeaturedPage