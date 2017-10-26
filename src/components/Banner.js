import React, { Component } from 'react'

class Banner extends Component{
	render() {
		return (
			<div className="parallax-container">
				<div className="section">
					<div className="container center white-text">
						<h2>Vitamin</h2>
						<h4 className="banner-subtitle">People <i className="material-icons">share</i> Time <i className="material-icons">share</i> Experiences</h4>
					</div>
				</div>
				<div className="parallax">
					<img className="banner" src="https://i.imgur.com/3VuMkuL.jpg?2" alt="banner"/>
				</div>
			</div>
		)
	}
}

export default Banner