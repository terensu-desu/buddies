import React, { Component } from 'react'

class Life extends Component{
	render() {
		const data = this.props.data
		return (
			<div className="row">
				<div className="col s12">
					<div className="col s8">
						<h4 className="no-margin-top">{ data.title }</h4>
						<div className="close-text">{ data.subtitle }</div>
						<hr/>
						<div className="row no-margin-bot">
							<div className="col s8">
								<div className="close-text"><span>{ data.category }</span></div>
								<div className="close-text">ホストは<span>{ data.host }</span>さん</div>
							</div>
							<div className="col s4">
								<img className="circle responsive-img host-circle-pic" src="https://via.placeholder.com/150x150" alt="host account circle-pic"/>
							</div>
						</div>
						<br/>
						<div className="row no-margin-bot">
							<div className="col s12">
								<div className="close-text"><i className="material-icons left">date_range</i>次の日: { data.date }</div>
								<div className="close-text"><i className="material-icons left">access_time</i>予定時刻: { data.time }</div>
								<div className="close-text"><i className="material-icons left">note</i>持ち物: { data.memo }</div>
								<div className="close-text"><i className="material-icons left">nature_people</i>集合場所: { data.meeting }</div>
								<div className="close-text"><i className="material-icons left">language</i>ガイドの言語：{ data.languages }</div>
							</div>
						</div>
						<hr/>
						<div className="row">
							<div className="col s3">
								<div className="close-text">
									ホストの<span>{ data.host }</span>さんについて
								</div>
							</div>
							<div className="col s9">
								<div className="close-text">
									{ data.host_info }
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col s3">
								<div className="close-text">
									<span>経験</span>のできること
								</div>
							</div>
							<div className="col s9">
								<div className="close-text">
									{ data.event_info }
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col s3">
								<div className="close-text">
									<span>event </span>location
								</div>
							</div>
							<div className="col s9">
								<div className="close-text">
									<iframe className="area-map" title="map" src={ data.map_url } allowFullScreen></iframe>
								</div>
							</div>
						</div>
					</div>
					<div className="col s4">
						<img className="responsive-img" src={ data.main_img } alt="event promo" />
						<div className="row no-margin-bot">
							<div className="col s6">
								<div className="center close-text">{ data.price }</div>
								<div className="close-text">
									<div className="star-ratings-css left">
									  <div className="star-ratings-css-top" style={{width: "90%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
									  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
									</div>
									<p className="reviews-text">12件のレビュー</p>
								</div>
							</div>
							<div className="col s6 center">
								<a className="btn orange darken-3">Book!</a>
							</div>
						</div>
						<div className="row no-margin-bot">
							<div className="col s12 center">
								<a href="#!"><i className="vit-accent social-icons fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
								<a href="#!"><i className="vit-accent social-icons fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
								<a href="#!"><i className="vit-accent social-icons fa fa-google-plus-square fa-2x" aria-hidden="true"></i></a>
								<a href="#!"><i className="vit-accent social-icons fa fa-envelope fa-2x" aria-hidden="true"></i></a>
								<a href="#!"><i className="vit-accent social-icons fa fa-heart fa-2x" aria-hidden="true"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Life