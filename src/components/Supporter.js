import React, { Component } from 'react'

class Supporter extends Component{
	render() {
		const id = this.props.id - 1
		const data = this.props.data[id]
		return (
			<div className="row">
				<div className="col s12">
					<div className="col s8">
						<h4><span>{ data.supporter }</span>さん</h4>
						<div className="close-text">{ data.supporter_intro }</div>
						<hr/>
						<br/>
						<div className="close-text"><i className="material-icons left">person</i>{ data.status }</div>
						<div className="close-text"><i className="material-icons left">language</i>ガイドの言語：{ data.languages }</div>
						<div className="close-text"><i className="material-icons left">build</i>{ data.experience }</div>
						<div className="close-text"><i className="material-icons left">school</i>{ data.skills }</div>
						<hr/>
						<div className="row">
							<div className="col s2">
								<div className="close-text">
									サポーターのオープンタイム
								</div>
							</div>
							<div className="col s10">
								<div className="close-text">
									{ data.open_time }
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col s2">
								<div className="close-text">
									エリア:
								</div>
							</div>
							<div className="col s10">
								<div className="close-text">
									{ data.area_info }
								</div>
							</div>
						</div>
					</div>
					<div className="col s4">
						<img className="main-page-image" src={ data.img } alt="event promo"/>
						<div className="close-text">
							<a className="btn appointment-btn">Appointment!</a>
						</div>
						<div className="close-text"><i className="material-icons left">star_rate</i>12件のレビュー</div>
						<div className="center close-text">
							<img className="thumbnail" src={ data.thumb1 } alt="event promo"/>
							<img className="thumbnail" src={ data.thumb2 } alt="event promo"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Supporter