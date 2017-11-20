import React, { Component } from 'react'

class Supporter extends Component{
	render() {
		const data = this.props.data
		return (
			<div className="row">
				<div className="col s12">
					<div className="card horizontal card-round">
						<div className="card-stacked">
							<div className="card-content">
								<h4 className="no-margin-top"><span>{data.host}</span>さん</h4>
								<div className="row no-margin-bot">
									<div className="col s12">
										<div className="close-text display-linebreak">{data.subtitle}</div>
									</div>
								</div>
								<hr/>
								<div className="row no-margin-bot">
									<div className="col s12">
										<div className="close-text"><i className="material-icons left">visibility</i><span>ステータス:</span> {data.status ? "オンライン!" : "オフライン"}</div>
										<div className="close-text"><i className="material-icons left">language</i><span>ガイドの言語: </span>{data.languages}</div>
										<div className="close-text"><i className="material-icons left">date_range</i><span>次の日:</span> {data.date}</div>
										<div className="close-text"><i className="material-icons left">access_time</i><span>予定時刻:</span> {data.time}</div>
										<div className="close-text"><i className="material-icons left">nature_people</i><span>集合場所:</span> {data.meeting}</div>
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
											<i className="material-icons left">note</i><span>持ち物</span>
										</div>
										<div className="close-text">
											{data.memo}
										</div>
										<hr/>
									</div>
								</div>
								<div className="row">
									<div className="col s12">
										<div className="close-text">
											<i className="material-icons left">face</i><span>サポーターのプロフィール</span>
										</div>
										<div className="display-linebreak close-text">
											{data.profile}
										</div>
									</div>
								</div>
								<br/>
								<br/>
								<div className="row no-margin-bot">
									<div className="col s12 center">
										<a href="#!"><i className="vit-accent social-icons fa fa-facebook-square fa-2x" aria-hidden="true"></i><p className="hidden">Facebook</p></a>
										<a href="#!"><i className="vit-accent social-icons fa fa-twitter-square fa-2x" aria-hidden="true"></i><p className="hidden">Twitter</p></a>
										<a href="#!"><i className="vit-accent social-icons fa fa-google-plus-square fa-2x" aria-hidden="true"></i><p className="hidden">Google+</p></a>
										<a href="#!"><i className="vit-accent social-icons fa fa-envelope fa-2x" aria-hidden="true"></i><p className="hidden">Email</p></a>
										<a href="#!"><i className="vit-accent social-icons fa fa-heart fa-2x" aria-hidden="true"></i><p className="hidden">Save</p></a>
									</div>
								</div>
							</div>
						</div>
						<div className="card-image">
							<img className="responsive-img page-main-img card-image-semi-round" src={this.state.mainImage} alt="supporter promo"/>
							<div className="container thumbnail-container close-text">
								<div className="row">
									<div className="col s4">
										<img className="thumbnail hoverable right" src={data.main_img} alt="supporter promo"/>
									</div>
									<div className="col s4">
										<img className="thumbnail hoverable right" src={data.sec_img} alt="supporter promo"/>
									</div>
									<div className="col s4">
										<img className="thumbnail hoverable right" src={data.thr_img} alt="supporter promo"/>
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

export default Supporter