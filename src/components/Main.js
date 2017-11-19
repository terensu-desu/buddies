import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FeaturedPage from '../containers/FeaturedPage'
import LifePage from '../containers/LifePage'
import SupporterPage from '../containers/SupporterPage'
import EventsPage from '../containers/EventsPage'
import Banner from '../components/Banner'
import LoginPage from './Auth/LoginPage'

class Main extends Component{
	render() {
		return (
			<Security issuer={config.issuer}
								client_id={config.clientId}
								redirect_uri={config.redirect_uri}>
        <Navbar/>
				<Banner/>
				<Route exact path="/" component={FeaturedPage}/>
				<Route path="/login" component={LoginPage}/>
				<Route path="/life/:id" component={LifePage} />
				<Route path="/supporter/:id" component={SupporterPage}/>
				<Route path="/events/:id" component={EventsPage}/>
			</Security>
		)
	}
}

export default Main