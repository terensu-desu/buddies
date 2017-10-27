import React, { Component } from 'react'

class Banner extends Component{
	render() {
		return (
			<div className="container-fluid banner">
				<div className="section">
					<div className="container center white-text">
						<h1 className="banner-title">Vitamin</h1>
						<h3 className="banner-subtitle">People <i className="material-icons">share</i> Time <i className="material-icons">share</i> Experiences</h3>
					</div>
				</div>
			</div>
		)
	}
}

export default Banner