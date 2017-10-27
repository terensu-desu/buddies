import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import FeaturedPage from '../containers/FeaturedPage'
import LifePage from '../containers/LifePage'
import SupporterPage from '../containers/SupporterPage'
import EventsPage from '../containers/EventsPage'
import Banner from '../components/Banner'

class Main extends Component{
	render() {
		return (
			<div>
				<Banner/>
				<Route exact path="/" component={ FeaturedPage }/>
				<Route path="/life/:id" component={ LifePage } />
				<Route path="/supporter/:id" component={ SupporterPage }/>
				<Route path="/events/:id" component={ EventsPage }/>
			</div>
		)
	}
}

export default Main