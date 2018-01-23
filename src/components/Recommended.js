import React, { Component } from 'react';

export default class Recommended extends Component {
	handleView() {
		const style = {
			"color": "#ef6c00",
			"background": "rgba(0,0,0,0.2)"
		}
		const list = [["悩み", "手伝い"], ["地元案内", "代行・つきそい"], ["おしゃれ・Shopping", "Buddiesスタッフおすすめ"]];
		return list.map((item, i) => {
			return (
				<div className="row center" key={i}>
					<div className="col s6">
						<div style={style} className="card-panel card-round">
							<h4>{item[0]}</h4>
						</div>
					</div>	
					<div className="col s6">
						<div style={style} className="card-panel card-round">
							<h4>{item[1]}</h4>
						</div>
					</div>	
				</div>
			);
		});
	}

	render() {
		return (
			<div className="container">
				{this.handleView()}
			</div>
		)
	}
}