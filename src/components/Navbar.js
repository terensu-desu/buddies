import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component{
	render() {
		return (
			<nav>
				<div className="nav-wrapper white accent-text">
					<Link to="/" className="brand-logo accent-text"><img className="vit-logo" src="https://i.imgur.com/zh52eL6.png" alt="logo"/></Link>
					<a className="brand-sublogo accent-text hide-on-med-and-down"><span className="brand-name">Buddies</span>     仲間と出会い、つながる、支え合う</a>
					<a href="#!" data-activates="sidebar-nav" className="button-collapse accent-text"><i className="material-icons">menu</i></a>
					<ul id="nav-mobile" className="right hide-on-med-and-down show-on-large">
						<li><a className="accent-text" href="#!">About</a></li>
						{this.props.authenticated ? 
							<li><a className="accent-text" href="#!">Logout</a></li> : 
							<li><Link to="/login" className="accent-text">Login</Link></li>}
						<li><a className="accent-text" href="#!">Sign Up</a></li>
						<li><a className="dropdown-button accent-text" href="#!" data-activates="lang-dropdown1" data-beloworigin="true"><i className="material-icons right">language</i></a></li>
					</ul>
					<ul className="side-nav center" id="sidebar-nav">
						<li><a className="accent-text" href="#!">心</a></li>
						<li><a className="accent-text" href="#!">生活</a></li>
						<li><a className="accent-text" href="#!">イベント</a></li>
						<li><a className="accent-text" href="#!">About</a></li>
						<li><a className="accent-text" href="#!">Log In</a></li>
						<li><a className="accent-text" href="#!">Sign Up</a></li>
						<li><a className="dropdown-button accent-text" href="#!" data-activates="lang-dropdown2" data-beloworigin="true"><span><i className="side-nav-icon material-icons left">language</i></span></a></li>
					</ul>
					<ul id="lang-dropdown1" className="dropdown-content">
						<li><a className="accent-text center" href="#!">日本語</a></li>
						<li><a className="accent-text center" href="#!">English</a></li>
						<li><a className="accent-text center" href="#!">中文</a></li>
					</ul>
					<ul id="lang-dropdown2" className="dropdown-content">
						<li><a className="accent-text center" href="#!">日本語</a></li>
						<li><a className="accent-text center" href="#!">English</a></li>
						<li><a className="accent-text center" href="#!">中文</a></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar