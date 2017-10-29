import React, { Component } from 'react'

class Supporter extends Component{
	render() {
		const data = this.props.data
		return (
			<div className="row">
				<div className="col s12">
					<div className="card horizontal">
						<div className="card-stacked">
							<div className="card-content">
								<h4 className="no-margin-top"><span>{ data.supporter }</span>さん</h4>
								<div className="row no-margin-bot">
									<div className="col s12">
										<div className="close-text display-linebreak">{ data.supporter_intro }</div>
									</div>
								</div>
								<hr/>
								<div className="row no-margin-bot">
									<div className="col s12">
										<div className="close-text"><i className="material-icons left">person</i><span>ステータス:</span> { data.status ? "オンライン!" : "オフライン" }</div>
										<div className="close-text"><i className="material-icons left">language</i><span>ガイドの言語: </span>{ data.languages }</div>
										<div className="close-text"><i className="material-icons left">build</i><span>経験:</span> { data.experience }</div>
										<div className="close-text"><i className="material-icons left">school</i><span>技能:</span> { data.skills }</div>
										<div className="close-text"><i className="material-icons left">my_location</i><span>場所:</span> { data.area }</div>
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
											<span>サポーターのオープンタイム</span>
										</div>
										<div className="close-text">
											{ data.time }
										</div>
										<hr/>
									</div>
								</div>
								<div className="row">
									<div className="col s12">
										<div className="close-text">
											<span>サポーターのプロフィール</span>
										</div>
										<div className="display-linebreak close-text">
											{ data.pic_profile }
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
						<div className="card-image">
							<img className="responsive-img page-main-img" src={ data.main_img } alt="supporter promo"/>
							<div className="container thumbnail-container close-text">
								<div className="row">
									<div className="col s6">
										<img className="thumbnail right" src={ data.thumb1 } alt="supporter promo"/>
									</div>
									<div className="col s6">
										<img className="thumbnail" src={ data.thumb2 } alt="supporter promo"/>
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