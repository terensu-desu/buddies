import React, { Component } from 'react'

class Supporter extends Component{
	render() {
		const id = this.props.id - 1
		const data = this.props.data[id]
		return (
			<div className="row">
				<div className="col s12">
					<div className="col s8">
						<h4 className="no-margin-top"><span>{ data.supporter }</span>さん</h4>
						<div className="row no-margin-bot">
							<div className="col s12">
								<div className="close-text">{ data.supporter_intro }</div>
							</div>
						</div>
						<hr/>
						<div className="row no-margin-bot">
							<div className="col s12">
								<div className="close-text"><i className="material-icons left">person</i>{ data.status ? "Online!" : "Offline" }</div>
								<div className="close-text"><i className="material-icons left">language</i>ガイドの言語：{ data.languages }</div>
								<div className="close-text"><i className="material-icons left">build</i>{ data.experience }</div>
								<div className="close-text"><i className="material-icons left">school</i>{ data.skills }</div>
							</div>
						</div>
						<hr/>
						<div className="row">
							<div className="col s12">
								<div className="close-text">
									サポーターのオープンタイム
								</div>
								<div className="close-text">
									{ data.open_time }
								</div>
								<hr/>
								<div className="close-text">
									エリア:
								</div>
								<div className="close-text">
									The next event will be held on 10/31/2017 and be available for all.
									<iframe className="area-map" title="map" src="https://www.google.com/maps/embed/v1/view?zoom=17&center=35.1699%2C136.9373&key=AIzaSyBASTkNgIJQFwUkpuGJC9XK_iy5cRGA4_I" allowFullScreen></iframe>
								</div>
							</div>
						</div>
					</div>
					<div className="col s4">
						<img className="responsive-img" src={ data.img } alt="event promo"/>
						<div className="row no-margin-bot">
							<div className="col s6">
								<div className="close-text">
									<div className="star-ratings-css left">
									  <div className="star-ratings-css-top" style={{width: "90%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
									  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
									</div>
									<p className="reviews-text">12件のレビュー</p>
								</div>
							</div>
							<div className="col s6">
								<div className="center close-text">
									<a className="btn appointment-btn orange darken-3">Appointment!</a>
								</div>
							</div>
						</div>
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