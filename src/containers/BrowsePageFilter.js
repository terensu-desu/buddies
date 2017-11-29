import React, { Component } from 'react'
import BrowsePage from '../components/BrowsePage'
import store from '../store'

// this will receive store data and send data to BrowsePage.js
class BrowsePageFilter extends Component{
	constructor(props) {
		super(props)
		this.data = store.retrieveData(props.lang)
	}
	render() {
		return <BrowsePage displayData={this.data} filter={this.props.match.params.filter} match={this.props.match} />
	}
}

export default BrowsePageFilter