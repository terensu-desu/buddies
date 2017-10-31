import React, { Component } from 'react'

class Life extends Component{
	render() {
		const data = this.props.data
		return (
			<div className="row">
				<div className="col s12">
					<div className="card horizontal">
						<div className="card-stacked">
							<div className="card-content">
								<h4 className="no-margin-top">{ data.title }</h4>
								<div className="close-text">{ data.subtitle }</div>
								<hr/>
								<div className="row no-margin-bot">
									<div className="col s8">
										<div className="close-text"><h5 className="vit-accent">{ data.category }</h5></div>
										<div className="close-text"><h5>ホストは<span>{ data.host }</span>さん</h5></div>
									</div>
									<div className="col s4">
										<img className="circle responsive-img host-circle-pic" src="https://placeimg.com/150/150/people?t=1509455627104" alt="host account circle-pic"/>
									</div>
								</div>
								<br/>
								<div className="row no-margin-bot">
									<div className="col s12">
										<div className="close-text"><i className="material-icons left">date_range</i>次の日: { data.date }</div>
										<div className="close-text"><i className="material-icons left">access_time</i>予定時刻: { data.time }</div>
										<div className="close-text"><i className="material-icons left">attach_money</i>価格: { data.price }</div>
										<div className="close-text"><i className="material-icons left">note</i>持ち物: { data.memo }</div>
										<div className="close-text"><i className="material-icons left">nature_people</i>集合場所: { data.meeting }</div>
										<div className="close-text"><i className="material-icons left">language</i>ガイドの言語：{ data.languages }</div>
										<div className="row">
											<div className="col s12">
												<div className="star-ratings-css left">
												  <div className="star-ratings-css-top" style={{width: "90%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
												  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
												</div>
												<p className="reviews-text">12件のレビュー</p>
											</div>
										</div>
										<div className="row no-margin-bot">
											<div className="col s12">
												<a className="btn appointment-btn orange darken-3">予定を予約する!</a>
											</div>
										</div>
									</div>
								</div>
								<hr/>
								<div className="row no-margin-bot">
									<div className="col s12">
										<div className="close-text">
											<h5>ホストの<span>{ data.host }</span>さんについて</h5>
										</div>
										<div className="close-text">
											{ data.host_info }
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col s12">
										<div className="close-text">
											<h5><span>経験</span>のできること</h5>
										</div>
										<div className="close-text">
											{ data.event_info }
										</div>
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
						<div id="main-image" className="card-image">
							<img className="page-main-img responsive-img" src={ data.main_img } alt="event promo" />
							<br/><br/><br/>
							<div className="close-text">
								<h5 className="center"><span>イベント</span>の場所</h5>
								<iframe className="area-map" title="map" src={ data.map_url } allowFullScreen></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Life