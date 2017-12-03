import React, { Component } from 'react'
import BrowsePage from '../components/BrowsePage'
import Loading from '../components/Loading'
import store from '../store'

// this will receive store data and send data to BrowsePage.js
class BrowsePageFilter extends Component{
	constructor(props) {
		super(props)
		this.data = store.retrieveData(props.lang)
		this.state = {
			loading: true
		}
		this.changeState = this.changeState.bind(this)
	}

	componentWillMount() {
		setInterval(this.changeState, 3000)
	}

	changeState() {
		this.setState({
			loading: false
		})
	}

	render() {
		return this.state.loading
		? <Loading />
		: <BrowsePage displayData={this.data} filter={this.props.match.params.filter} />
	}
}

export default BrowsePageFilter