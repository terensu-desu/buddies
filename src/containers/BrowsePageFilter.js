import React, { Component } from 'react'
import BrowsePage from '../components/BrowsePage'
import Loading from '../components/Loading'
import store from '../store'

// this will receive state data, like language, and display data from the store to BrowsePage.js
class BrowsePageFilter extends Component{
	constructor(props) {
		super(props)
		this.data = store.retrieveData(props.lang)
		this.state = { loading: true }
	}

	componentWillReceiveProps(nextProps) {
    this.data = store.retrieveData(nextProps.lang)
  }

  componentWillMount() {
  	setTimeout(() =>{
  		this.setState({
  			loading: false
  		})
  	}, 1500)
  }

	render() {
		return this.state.loading ? <Loading /> : <BrowsePage displayData={this.data} filter={this.props.match.params.filter} />
	}
}

export default BrowsePageFilter