import React, { Component } from 'react'
import Featured from '../components/Featured'
import store from '../store'

// this will receive state data, like language, and display data from the store to Featured.js
class FeaturedPage extends Component{
	constructor(props) {
		super(props)
		this.data = store.retrieveData(props.lang)
	}

  componentWillReceiveProps(nextProps) {
    this.data = store.retrieveData(nextProps.lang)
  }

	render() {
		return (
			<Featured displayData={this.data} />
		)
	}
}

export default FeaturedPage