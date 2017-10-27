import React, { Component } from 'react'
import Life from '../components/Life'
import store from '../store'

// this will receive state data and send data to Life.js
class LifePage extends Component{
	constructor(props) {
		super(props)
		this.data = store.getPageData("life", props.match.params.id)
	}
	
	render() {
		return (
			<div className="section">
				<div className="container">
					<Life data={ this.data } />
				</div>
			</div>
		)
	}
}

export default LifePage