import React, { Component } from 'react'

class Supporter extends Component{
	render() {
		const data = this.props.data
		return (
			<div className="row">
				<div className="col s12">
					<div className="col s8">
						<h4 className="no-margin-top"><span>{ data.supporter }</span>さん</h4>
						<div className="row no-margin-bot">
							<div className="col s12">
								<div className="close-text display-linebreak">{ data.supporter_intro }</div>
							</div>
						</div>
						<hr/>
						<div className="row no-margin-bot">
							<div className="col s12">
								<div className="close-text"><i className="material-icons left">person</i>{ data.status ? "オンライン!" : "オフライン" }</div>
								<div className="close-text"><i className="material-icons left">language</i>ガイドの言語：{ data.languages }</div>
								<div className="close-text"><i className="material-icons left">build</i>{ data.experience }</div>
								<div className="close-text"><i className="material-icons left">school</i>{ data.skills }</div>
								<div className="close-text"><i className="material-icons left">my_location</i>場所: { data.area }</div>
								<div className="star-ratings-css left">
								  <div className="star-ratings-css-top" style={{width: "90%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
								  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
								</div>
								<p className="reviews-text">12件のレビュー</p>
								<a className="btn appointment-btn orange darken-3">予定を予約する!</a>
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
					</div>
					<div className="col s4">
						<img className="responsive-img" src={ data.main_img } alt="event promo"/>
						<div className="row no-margin-bot">
							<div className="col s12">
								<div className="center thumbnail-container close-text">
									<img className="thumbnail" src={ data.thumb1 } alt="event promo"/>
									<img className="thumbnail" src={ data.thumb2 } alt="event promo"/>
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
			</div>
		)
	}
}

export default Supporter