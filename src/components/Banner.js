import React, { Component } from 'react'

class Banner extends Component{
	render() {
		return (
			<div className="container">
				<div className="section">
					<div className="row no-margin-bot">
						<div className="col s12">
							<div className="card-panel">
								<div className="row no-margin-bot">
									<div className="input-field col s12">
										<i className="material-icons prefix"></i>
										<input type="search" id="searchBar" className="autocomplete" />
										<label htmlFor="searchBar">Search Buddies</label>
										<a className="btn-large featured-btn right">Search!</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Banner