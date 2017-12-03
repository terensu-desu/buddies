import React, { Component } from 'react'
import Featured from '../components/Featured'
import store from '../store'

// this will receive state data and send data to Featured.js
class FeaturedPage extends Component{
	constructor(props) {
		super(props)
		this.data = store.retrieveData(props.lang)
	}

  componentWillReceiveProps(nextProps) {
    console.log(this.nextProps)
    this.data = store.retrieveData(nextProps.lang)
  }

	render() {
		return (
			<Featured displayData={this.data} />
		)
	}
}

export default FeaturedPage