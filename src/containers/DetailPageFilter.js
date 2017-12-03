import React, { Component } from 'react'
import DetailPage from '../components/DetailPage'
import store from '../store'

// this will receive state data, like language, and display data from the store to DetailPage.js
class DetailPageFilter extends Component{
	constructor(props) {
		super(props)
		this.data = store.retrieveDetailData(props.lang, props.match.params.section, props.match.params.page, props.match.params.id)
	}

	componentWillReceiveProps(nextProps) {
    this.data = store.retrieveDetailData(nextProps.lang, nextProps.match.params.section, nextProps.match.params.page, nextProps.match.params.id)
  }

	render() {
		return (
			<div className="container">
				<DetailPage data={this.data} />
			</div>
		)
	}
}

export default DetailPageFilter