import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Featured extends Component{
	handleLifeData() {
		const data = this.props.lifeData
		const dataMap = data.map((item, i) => {
			return (
				<div className="carsoul-container" key={i}>
					<Link to={item.url}>
						<div className="row featured-row">
							<div className="col s12">
								<img className="carsoul-thumb-img responsive-img" src={item.img} alt="carousel preview" />
							</div>
						</div>
						<div className="row featured-row">
							<div className="col s12">{item.title}</div>
						</div>
						<div className="row featured-row">
							<div className="col s6">
								<div className="left">{item.host}</div>
							</div>
							<div className="col s6">
								<span className="right">{item.date}</span>
							</div>
						</div>
						<div className="row featured-row">
							<div className="col s6">
								<div className="star-ratings-featured-css left">
								  <div className="star-ratings-css-top" style={{width: "90%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
								  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
								</div>
							</div>
							<div className="col s6">
								<span className="right">{item.price}</span>
							</div>
						</div>
					</Link>
				</div>
			)
		})
		return dataMap
	}

	handleLifeDataV() {
		// also add header for this area
		const data = this.props.lifeData.slice(0,4)
		const dataMap = data.map((item, i) => {
			return (
				<div className="col s6" key={i}>
					<div className="card card-round hoverable">
						<Link to={item.url}>
							<div className="card-image">
								<img className="card-image-round" src={item.img} alt="featured preview" />
								<div className="close-text card-title featured-title">{item.title}</div>
							</div>
							<div className="card-content">
								<div className="row featured-row">
									<div className="col s12 m8">
										<p>{item.host}</p>
									</div>
									<div className="col s12 m4">
										<div className="star-ratings-featured-css">
										  <div className="star-ratings-css-top" style={{width: "90%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
										  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
										</div>
									</div>
								</div>
								<div className="row featured-row">
									<div className="col s12 m6">
										<p>{item.date}</p>
									</div>
									<div className="col s12 m6">
										<p className="right hide-on-small-only">{item.price}</p>
										<p className="hide-on-med-and-up show-on-small">{item.price}</p>
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

	handleSupporterDataV() {
		const data = this.props.supporterData.slice(0,4)
		const dataMap = data.map((item, i) => {
			return (
				<div className="col s6" key={i}>
					<div className="card card-round hoverable">
						<Link to={item.url}>
							<div className="card-image">
								<img className="card-image-round" src={item.img} alt="featured preview" />
								<div className="close-text card-title featured-title">{item.supporter}</div>
							</div>
							<div className="card-content">
								<div className="row featured-row">
									<div className="col s12 m8">
										<p>{item.experience}</p>
									</div>
									<div className="col s12 m4">
										<div className="star-ratings-featured-css">
										  <div className="star-ratings-css-top" style={{width: "90%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
										  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
										</div>
									</div>
								</div>
								<div className="row featured-row">
									<div className="col s12 m6">
										<p>{item.time}</p>
									</div>
									<div className="col s12 m6">
										<p className="right hide-on-small-only">{item.price}</p>
										<p className="hide-on-med-and-up show-on-small">{item.price}</p>
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

	handleSupporterDataold() {
		const data = this.props.supporterData
		const dataMap = data.map((item, i) => {
			return (
				<div className="carsoul-container" key={i}>
					<Link to={ item.url }>
						<div className="row featured-row">
							<div className="col s12">
								<img className="carsoul-thumb-img responsive-img" src={ item.img } alt="carousel preview" />
							</div>
						</div>
						<div className="row featured-row">
							<div className="col s12">
								<div className="left">{ item.supporter }</div>
								<span className="right">{ item.experience }</span>
							</div>
						</div>
						<div className="row featured-row">
							<div className="col s12">
								<div className="left">{ item.languages }</div>
								<span className="right">{ item.time }</span>
							</div>
						</div>
						<div className="row featured-row">
							<div className="col s12">
								<div className="star-ratings-featured-css left">
								  <div className="star-ratings-css-top" style={{width: "90%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
								  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
								</div>
								<span className="right">{ item.price }</span>
							</div>
						</div>
					</Link>
				</div>
			)
		})
		return dataMap
	}

	handleEventDataold() {
		const data = this.props.eventData
		const dataMap = data.map((item, i) => {
			return (
				<div className="carsoul-container" key={i}>
					<Link to={ item.url }>
						<div className="row featured-row">
							<div className="col s12">
								<img className="carsoul-thumb-img responsive-img" src={ item.img } alt="carousel preview" />
							</div>
						</div>
						<div className="row featured-row">
							<div className="col s12">{ item.title }</div>
						</div>
						<div className="row featured-row">
							<div className="col s12">
								<div className="left">{ item.host }</div>
								<span className="right">{ item.date }</span>
							</div>
						</div>
						<div className="row featured-row">
							<div className="col s12">
								<div className="star-ratings-featured-css left">
								  <div className="star-ratings-css-top" style={{width: "90%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
								  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
								</div>
								<span className="right">{ item.price }</span>
							</div>
						</div>
					</Link>
				</div>
			)
		})
		return dataMap
	}

	render() {
		const category = ["すべて","交通","市役所","学校","病院","銀行・金融","子ども","趣味","生活相談",
											"料理","食事","美容・ファッション","生活","文化","学業","お金","子育て","健康",
											"職場","睡眠","ホームパーティ","居酒屋・バー",];
		const prefectures = ["すべて","愛知県","秋田県","青森県","千葉県","愛媛県","福井県","福岡県","岐阜県","群馬県",
											"広島県","北海道","兵庫県	","茨城県	","石川県	","岩手県	","香川県","鹿児島県	","神奈川県",
											"高知県","熊本県","京都府","三重県","宮城県","宮崎県","長野県","長崎県","奈良県","新潟県",
											"大分県","岡山県","沖縄県","大阪府","佐賀県","埼玉県","滋賀県","島根県","静岡県","栃木県",
											"徳島県","東京都","鳥取県","富山県","和歌山県","山形県","山口県	","山梨県",];
		return (
			<div className="container">
				<div className="section">
					<div className="row">
						<div className="col m12 l12 xl6">
							<div className="card-panel card-round">
									<div className="row no-margin-top">
										<div className="col s12">
											<h4 className="no-margin-bot">みんなのリクエスト</h4>
										</div>
									</div>
									<div className="row no-margin-bot">
										{this.handleLifeDataV()}
										<a href="#!" className="right btn orange darken-3">もっと</a>
									</div>
							</div>
						</div>
						<div className="col m12 l12 xl6">
							<div className="card-panel card-round">
								<div className="row no-margin-top">
									<div className="col s12">
										<h4 className="no-margin-bot">みんなのサポート</h4>
									</div>
								</div>
								<div className="row no-margin-bot">
									{this.handleSupporterDataV()}
									<a href="#!" className="right btn orange darken-3">もっと</a>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<br/>
						<div className="col s12">
							<div className="card-panel card-round">
								<div className="center">
									<h5>Buddiesは海外から来た人と現地のつなげwin-winを作るサービスです。</h5>
									<hr/>
									<img className="responsive-img" src="https://i.imgur.com/4TCm4Ec.png" alt="service breakdown" />
									<hr/>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<br/>
						<div className="col s12">
							<div className="row">
								<div className="col s12">
									<div className="card-panel card-round">
										<div className="row">
											<h4>カテゴリー</h4>
											{category.map((item, i) => {
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
					<div className="row">
						<br/>
						<div className="col s12">
							<div className="row">
								<div className="col s12">
									<div className="card-panel card-round">
										<div className="row">
											<h4>場所</h4>
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
			</div>
		)
	}
}

export default Featured