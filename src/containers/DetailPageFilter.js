import React, { Component } from 'react'
import DetailPage from '../components/DetailPage'
import store from '../store'

// this will receive store data and send data to DetailPage.js
class DetailPageFilter extends Component{
	constructor(props) {
		super(props)
		this.data = store.getPageData(props.match.params.page, props.match.params.id)
	}
	render() {
		return (
			<div className="section">
				<div className="container">
					<DetailPage data={ this.data } />
				</div>
			</div>
		)
	}
}

export default DetailPageFilter