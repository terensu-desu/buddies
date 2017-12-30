import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PreRegisterForm from "./PreRegisterForm";

class Featured extends Component{
	constructor(props) {
		super(props)
		this.view = props.displayData.view
		this.requests = props.displayData.requests
		this.support = props.displayData.support
	}

	componentWillReceiveProps(nextProps) {
		this.view = nextProps.displayData.view
		this.requests = nextProps.displayData.requests
		this.support = nextProps.displayData.support
	}

	handlePreviewData(filter) {
		let data = []
		if(filter === "requests") {
			data = this.requests.buddies.slice(0,4)
		}else if(filter === "support") {
			data = this.support.buddies.slice(0,4)
		}
		const dataMap = data.map((item,i) => {
			return (
				<div className="col s12 m6" key={i}>
					<div className="card card-round hoverable">
						<Link to={item.url}>
							<div className="card-image">
								<img className="card-image-round" src={item.img} alt="featured preview" />
								<div className="close-text card-title featured-title truncate">{item.title}</div>
							</div>
							<div className="card-content">
								<div className="row featured-row">
									<div className="col s12 m7">
										<p className="featured-text">{item.host}</p>
									</div>
									<div className="col s12 m5">
										<div className="star-ratings-featured-css">
										  <div className="star-ratings-css-top" style={{width: "90%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
										  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
										</div>
									</div>
								</div>
								<div className="row featured-row">
									<div className="col s12 m5">
										<p className="featured-text">{item.time}</p>
									</div>
									<div className="col s12 m7">
										<p className="featured-text right hide-on-small-only">{item.price}</p>
										<p className="hide-on-med-and-up show-on-small featured-text">{item.price}</p>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			)
		})
		return dataMap
	}
/* 
							<h4>Pre-register for our service and receive news and an invite to our launch!</h4>
							<a className="btn orange darken-3" href="http://eepurl.com/dfLNgv">Click to pre-register</a>
*/
	render() {
		const category1 = ["すべて","交通","市役所","学校","病院","銀行・金融","子ども","趣味","生活相談","料理","食事","美容・ファッション","その他"];
		const category2 = ["すべて","生活","文化","学業","お金","子育て","健康","職場","睡眠","その他"];
		const category3 = ["すべて","ホームパーティ","居酒屋・バー","その他"];
		const prefectures = ["すべて","愛知県","秋田県","青森県","千葉県","愛媛県","福井県","福岡県","岐阜県","群馬県",
											"広島県","北海道","兵庫県	","茨城県	","石川県	","岩手県	","香川県","鹿児島県	","神奈川県",
											"高知県","熊本県","京都府","三重県","宮城県","宮崎県","長野県","長崎県","奈良県","新潟県",
											"大分県","岡山県","沖縄県","大阪府","佐賀県","埼玉県","滋賀県","島根県","静岡県","栃木県",
											"徳島県","東京都","鳥取県","富山県","和歌山県","山形県","山口県	","山梨県",];
		return (
			<div className="container">
				<div className="row">
					<div className="col m12 l12 xl6">
						<div className="card-panel card-round">
								<div className="row no-margin-top">
									<div className="col s12">
										<h4 className="no-margin-bot no-margin-top">{this.view.home.requests}</h4>
									</div>
								</div>
								<div className="row no-margin-bot">
									{this.handlePreviewData("requests")}
									<Link to="/browse/requests" className="right btn orange darken-3">{this.view.home.more}</Link>
								</div>
						</div>
					</div>
					<div className="col m12 l12 xl6">
						<div className="card-panel card-round">
							<div className="row no-margin-top">
								<div className="col s12">
									<h4 className="no-margin-bot no-margin-top">{this.view.home.support}</h4>
								</div>
							</div>
							<div className="row no-margin-bot">
								{this.handlePreviewData("support")}
								<Link to="/browse/support" className="right btn orange darken-3">{this.view.home.more}</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<div className="card-panel card-round">
							<div className="center">
								<h4 className="flow-text">{this.view.home.siteBlurb}</h4>
								<div className="divider"></div>
								<img className="responsive-img" src={this.view.home.siteBlurbPic} alt="service breakdown" />
								<div className="divider"></div>
								<h4 className="flow-text">{this.view.home.secureBlurb}</h4>
								<div className="row">
						      <div className="col s4">
						      	<div className="center promo">
							      	<i className="material-icons large vit-accent">rate_review</i>
							      	<h5>{this.view.home.secureDetailTitle1}</h5>
							      	<p>{this.view.home.secureDetail1}</p>
						      	</div>
						      </div>
						      <div className="col s4">
						      	<div className="center promo">
						      		<i className="material-icons large vit-accent">perm_identity</i>
							      	<h5>{this.view.home.secureDetailTitle2}</h5>
							      	<p>{this.view.home.secureDetail2}</p>
							      </div>
						      </div>
						      <div className="col s4">
						      	<div className="center promo">
							      	<i className="material-icons large vit-accent">remove_red_eye</i>
							      	<h5>{this.view.home.secureDetailTitle3}</h5>
							      	<p>{this.view.home.secureDetail3}</p>
						      	</div>
						      </div>
						    </div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col s8 offset-s2">
						<PreRegisterForm />
					</div>
				</div>
				<div className="row no-margin-bot">
					<div className="col s12">
						<div className=" card-panel card-round">
							<div className="row no-margin-bot">
								<div className="col s12">
									<h4>カテゴリー</h4>
								</div>
							</div>
							<div className="row no-margin-top hide-on-med-and-down">
					      <div className="col s4">
					      	<div className="center">
						      	<h5>Buddies</h5>
						      	<div className="row">
						      		<div className="col s6">
						      			<ul className="collection card-round">
													{category1.slice(0,6).map((item, i) => {
															return (
																<a className="collection-item vit-accent cat-circle z-depth-2" key={i} href="#!">{item}</a>
															)
														})
													}
												</ul>
						      		</div>
						      		<div className="col s6">
						      			<ul className="collection card-round">
													{category1.slice(7,13).map((item, i) => {
															return <a className="collection-item vit-accent cat-circle z-depth-2" key={i} href="#!">{item}</a>
														})
													}
												</ul>
						      		</div>
						      	</div>
					      	</div>
					      </div>
					      <div className="col s4">
					      	<div className="center">
						      	<h5>Life</h5>
						      	<div className="row">
						      		<div className="col s6">
						      			<ul className="collection card-round">
													{category2.slice(0,5).map((item, i) => {
															return (
																<a className="collection-item vit-accent cat-circle z-depth-2" key={i} href="#!">{item}</a>
															)
														})
													}
												</ul>
						      		</div>
						      		<div className="col s6">
						      			<ul className="collection card-round">
													{category2.slice(6,10).map((item, i) => {
															return <a className="collection-item vit-accent cat-circle z-depth-2" key={i} href="#!">{item}</a>
														})
													}
												</ul>
						      		</div>
						      	</div>
						      </div>
					      </div>
					      <div className="col s4">
					      	<div className="center">
						      	<h5>Events</h5>
						      	<div className="row">
						      		<div className="col s12">
						      			<ul className="collection card-round">
													{category3.map((item, i) => {
															return (
																<a className="collection-item vit-accent cat-circle z-depth-2" key={i} href="#!">{item}</a>
															)
														})
													}
												</ul>
						      		</div>
						      	</div>
					      	</div>
					      </div>
					    </div>
					    <div className="row no-margin-top show-on-medium-and-down hide-on-large-only">
					    	<div className="col s12">
					    		<h5>Buddies</h5>
					    		{category1.slice(0,6).map((item, i) => {
											return (
												<a className="collection-item vit-accent cat-circle z-depth-2" key={i} href="#!">{item}</a>
											)
										})
									}
									{category1.slice(7,13).map((item, i) => {
											return (
												<a className="collection-item vit-accent cat-circle z-depth-2" key={i} href="#!">{item}</a>
											)
										})
									}
					    	</div>
					    </div>
					    <div className="row no-margin-top show-on-medium-and-down hide-on-large-only">
					    	<div className="col s6">
					    		<h5>Life</h5>
					    		{category2.slice(0,6).map((item, i) => {
											return (
												<a className="collection-item vit-accent cat-circle z-depth-2" key={i} href="#!">{item}</a>
											)
										})
									}
					    	</div>
					    	<div className="col s6">
					    		<h5>Events</h5>
					    		{category3.slice(0,6).map((item, i) => {
											return (
												<a className="collection-item vit-accent cat-circle z-depth-2" key={i} href="#!">{item}</a>
											)
										})
									}
					    	</div>
					    </div>
				    </div>
			    </div>
		    </div>
				<div className="row">
					<div className="col s12">
						<div className="card-panel card-round">
							<div className="row">
								<div className="col s12">
									<div className="row">
										<div className="col s12">
											<h4>場所</h4>
										</div>
									</div>
									<div className="row">
										{prefectures.map((item, i) => {
												return (
													<div className="col s6 m6 l4 xl2" key={i}>
														<a className="vit-accent cat-circle z-depth-2">{item}</a>
													</div>
												)
											})
										}
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

export default Featured