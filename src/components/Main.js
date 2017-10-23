import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import FeaturedPage from '../containers/FeaturedPage'
import EventsPage from '../containers/EventsPage'
import Banner from '../components/Banner'

class Main extends Component{
	render() {
		return (
			<div>
				<Banner/>
				<Route exact path="/" component={ FeaturedPage }/>
				<Route path="/event/:id" component={ EventsPage }/>
			</div>
		)
	}
}

export default Main