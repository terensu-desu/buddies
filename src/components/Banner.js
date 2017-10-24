import React, { Component } from 'react'

class Banner extends Component{
	render() {
		return (
			<div className="parallax-container">
				<div className="section">
					<div className="container center white-text">
						<h2>Vitamin</h2>
						<h4>心と生活のサプリメント</h4>
					</div>
				</div>
				<div className="parallax">
					<img className="banner" src="https://i.imgur.com/Q3NeZj1.jpg?1" alt="banner"/>
				</div>
			</div>
		)
	}
}

export default Banner