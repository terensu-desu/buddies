import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../store'

class Navbar extends Component{
	constructor(props) {
		super(props)
		this.view = store.retrieveLanguageView(props.lang)
	}

	handleClick(e, val) {
		e.preventDefault()
		this.props.changeLanguage(val)
	}

	componentWillReceiveProps(nextProps)	{
		this.view = store.retrieveLanguageView(nextProps.lang)
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper white accent-text">
					<Link to="/" className="brand-logo accent-text"><img className="vit-logo" src="https://i.imgur.com/aRCQbZS.png" alt="logo"/></Link>
					<a className="brand-sublogo accent-text hide-on-med-and-down"><span className="brand-name">Buddies</span>     {this.view.navbar.sublogo}</a>
					<a href="#!" data-activates="sidebar-nav" className="button-collapse accent-text"><i className="material-icons">menu</i></a>
					<ul id="nav-mobile" className="right hide-on-med-and-down show-on-large">
						<li><a className="accent-text" href="#!">{this.view.navbar.about}</a></li>
						{this.props.authentication
							? <li><a className="accent-text" href="#!">{this.view.navbar.logOut}</a></li> 
							: <li><Link to="/login" className="accent-text">{this.view.navbar.logIn}</Link></li>
						}
						<li><a className="accent-text" href="#!">{this.view.navbar.signUp}</a></li>
						<li><a className="dropdown-button accent-text" href="#!" data-activates="lang-dropdown1" data-beloworigin="true"><i className="material-icons right">language</i></a></li>
					</ul>
					<ul className="side-nav center" id="sidebar-nav">
						<li><a className="accent-text" href="#!">{this.view.navbar.about}</a></li>
						{this.props.authentication
							? <li><a className="accent-text" href="#!">{this.view.navbar.logOut}</a></li>
							: <li><Link to="/login" className="accent-text">{this.view.navbar.logIn}</Link></li>
						}
						<li><a className="accent-text" href="#!">{this.view.navbar.signUp}</a></li>
						<li><a className="dropdown-button accent-text" href="#!" data-activates="lang-dropdown2" data-beloworigin="true"><span><i className="side-nav-icon material-icons left">language</i></span></a></li>
					</ul>
					<ul id="lang-dropdown1" className="dropdown-content">
						<li><a onClick={(e) => this.handleClick(e,"japanese")} className="accent-text center">日本語</a></li>
						<li><a onClick={(e) => this.handleClick(e, "english")} className="accent-text center">English</a></li>
						<li><a onClick={(e) => this.handleClick(e, "japanese")} className="accent-text center">中文</a></li>
					</ul>
					<ul id="lang-dropdown2" className="dropdown-content">
						<li><a onClick={(e) => this.handleClick(e, "japanese")} className="accent-text center" href="#!">日本語</a></li>
						<li><a onClick={(e) => this.handleClick(e, "english")} className="accent-text center" href="#!">English</a></li>
						<li><a onClick={(e) => this.handleClick(e, "japanese")} className="accent-text center" href="#!">中文</a></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar