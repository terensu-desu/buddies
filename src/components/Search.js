import React, { Component } from 'react'

class Search extends Component{
	render() {
		return (
			<div className="container">
				<div className="section">
					<div className="row no-margin-bot">
						<div className="col s12">
							<div className="card-panel card-round">
								<div className="row no-margin-bot">
									<div className="input-field col s12 m10 no-margin-top">
										<i className="material-icons prefix search-margin-push">search</i>
										<input type="search" id="searchBar" className="autocomplete" />
										<label htmlFor="searchBar">Search Buddies</label>
									</div>
									<div className="col s12 m2 center">
										<a className="btn orange darken-3 search-margin-push">Search!</a>
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

export default Search