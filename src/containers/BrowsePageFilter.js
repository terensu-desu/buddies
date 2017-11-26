import React, { Component } from 'react'
import BrowsePage from '../components/BrowsePage'
import store from '../store'

// this will receive store data and send data to BrowsePage.js
class BrowsePageFilter extends Component{
	constructor() {
		super()
		this.data = store.getData()
	}
	render() {
		return <BrowsePage data={this.data} filter={this.props.match.params.filter} />
	}
}

export default BrowsePageFilter