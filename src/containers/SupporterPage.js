import React, { Component } from 'react'
import Supporter from '../components/Supporter'
import store from '../store'

// this will receive state data and send data to Supporter.js
class SupporterPage extends Component{
	constructor(props) {
		super(props)
		this.data = store.getPageData("buddies", props.match.params.id)
	}
	render() {
		return (
			<div className="section">
				<div className="container">
					<Supporter data={ this.data } />
				</div>
			</div>
		)
	}
}

export default SupporterPage