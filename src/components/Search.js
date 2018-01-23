import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';

export default class Search extends Component{
	constructor(props) {
		super(props);
		this.view = store.retrieveLanguageView(props.lang);
	}

	componentWillReceiveProps(nextProps) {
		this.view = store.retrieveLanguageView(nextProps.lang);
	}

	render() {
		return (
			<div className="container">
				<div className="card-panel card-round minimal-padding">
					<div className="row center no-margin-bot">
						<div className="col s3">
							<Link to="/" className="">{this.view.home.home}</Link>
						</div>
						<div className="col s3">
							<Link to="/recommended" className="">{this.view.home.recommended}</Link>
						</div>
						<div className="col s3">
							<Link to="/browse/requests" className="">{this.view.home.requests}</Link>
						</div>
						<div className="col s3">
							<Link to="/browse/support" className="">{this.view.home.support}</Link>
						</div>
					</div>
				</div>
				<div className="row no-margin-bot">
					<div className="col s12">
						<div className="card-panel card-round">
							<div className="row no-margin-bot">
								<div className="input-field col s12 m10 no-margin-top">
									<i className="material-icons prefix search-margin-push">search</i>
									<input type="text" id="searchBar" className="autocomplete" />
									<label htmlFor="searchBar">Search Buddies</label>
									<div className="center">
										<a className="btn orange darken-3 search-margin-push hide-on-large-only show-on-medium-only">Search!</a>
									</div>
								</div>
								<div className="col s12 m2 center">
									<a className="btn orange darken-3 search-margin-push hide-on-med-and-down">Search!</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}