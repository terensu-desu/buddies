import React, { Component } from 'react'
import Events from '../components/Events'
import store from '../store'

// this will receive state data and send data to Events.js
class EventsPage extends Component{
	constructor(props) {
		super(props)
		this.data = store.getPageData("events", props.match.params.id)
	}
	render() {
		return (
			<div className="section">
				<div className="container">
					<Events data={ this.data } />
				</div>
			</div>
		)
	}
}

export default EventsPage