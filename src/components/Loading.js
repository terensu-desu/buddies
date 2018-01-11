import React, { Component } from 'react';

export default class Loading extends Component {
	render() {
		return(
			<div className="container">
				<div className="row center">
					<div className="col s12">
					<br/>
					<br/>
						<div className="preloader-wrapper big active">
					    <div className="spinner-layer spinner-red-only">
					      <div className="circle-clipper left">
					        <div className="circle"></div>
					      </div>
					      <div className="gap-patch">
					        <div className="circle"></div>
					      </div>
					      <div className="circle-clipper right">
					        <div className="circle"></div>
					      </div>
					    </div>
					  </div>
					  <h4>Please wait...</h4>
				  </div>
			  </div>
		  </div>
		);
	}
}