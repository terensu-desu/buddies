import React, { Component } from 'react'

class Events extends Component{
	render() {
		const id = this.props.id - 1
		const data = this.props.data[id]
		return (
			<div className="row">
				<div className="col s12">
					<div className="col s8">
						<h4>{ data.title }</h4>
						<div className="close-text">{ data.subtitle }</div>
						<hr/>
						<div className="close-text"><span>{ data.category }</span></div>
						<div className="close-text">ホストは<span>{ data.host }</span>さん</div>
						<br/>
						<div className="close-text"><i className="material-icons left">date_range</i>{ data.date }</div>
						<div className="close-text"><i className="material-icons left">access_time</i>{ data.time }</div>
						<div className="close-text"><i className="material-icons left">note</i>{ data.memo }</div>
						<div className="close-text"><i className="material-icons left">language</i>ガイドの言語：{ data.languages }</div>
						<hr/>
						<div className="row">
							<div className="col s2">
								<div className="close-text">
									ホストの<span>{ data.host }</span>さんについて
								</div>
							</div>
							<div className="col s10">
								<div className="close-text">
									{ data.host_info }
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col s2">
								<div className="close-text">
									<span>経験</span>のできること
								</div>
							</div>
							<div className="col s10">
								<div className="close-text">
									{ data.event_info }
								</div>
							</div>
						</div>
					</div>
					<div className="col s4">
						<img src={ data.img } alt="event promo" />
						<div className="close-text">{ data.price }</div>
						<div className="close-text"><i className="material-icons left">star_rate</i>12件のレビュー</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Events