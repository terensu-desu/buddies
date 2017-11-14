import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Featured extends Component{
	handleLifeData() {
		const data = this.props.lifeData
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
							<div className="col s6">
								<div className="left">{ item.host }</div>
							</div>
							<div className="col s6">
								<span className="right">{ item.date }</span>
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
								<span className="right">{ item.price }</span>
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
				<div className="col s6">
					<div className="card" key={i}>
						<Link to={item.url}>
							<div className="card">
								<div className="card-image">
									<img src={item.img} alt="featured preview" />
									<div className="close-text card-title featured-title">{item.title}</div>
								</div>
								<div className="card-content">
									<div className="row featured-row">
										<div className="col s8">
											<p>{item.host}</p>
										</div>
										<div className="col s4">
											<div className="star-ratings-featured-css">
											  <div className="star-ratings-css-top" style={{width: "90%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
											  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
											</div>
										</div>
									</div>
									<div className="row featured-row">
										<div className="col s6">
											<p>{item.date}</p>
										</div>
										<div className="col s6">
											<p className="right">{item.price}</p>
										</div>
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
				<div className="col s6">
					<div className="card" key={i}>
						<Link to={item.url}>
							<div className="card">
								<div className="card-image">
									<img src={item.img} alt="featured preview" />
									<div className="close-text card-title featured-title">{item.supporter}</div>
								</div>
								<div className="card-content">
									<div className="row featured-row">
										<div className="col s8">
											<p>{item.experience}</p>
										</div>
										<div className="col s4">
											<div className="star-ratings-featured-css">
											  <div className="star-ratings-css-top" style={{width: "90%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
											  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
											</div>
										</div>
									</div>
									<div className="row featured-row">
										<div className="col s6">
											<p>{item.time}</p>
										</div>
										<div className="col s6">
											<p className="right">{item.price}</p>
										</div>
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
		const category = ["交通","市役所","学校","病院","銀行・金融","子ども","趣味","生活相談",
											"料理","食事","美容・ファッション","生活","文化","学業","お金","子育て","健康",
											"職場","睡眠","ホームパーティ","居酒屋・バー",]
		return (
			<div className="container">
				<div className="section">
					<div className="row">
						<div className="col m12 l12 xl6">
							<div className="card-panel">
									<div className="row no-margin-top">
										<div className="col s12">
											<h4 className="no-margin-bot">みんなのリクエスト <a href="#!" className="right btn featured-btn">もっと</a></h4>
										</div>
									</div>
									<div className="row no-margin-bot">
										{ this.handleLifeDataV() }
									</div>
							</div>
						</div>
						<div className="col m12 l12 xl6">
							<div className="card-panel">
								<div className="row no-margin-top">
									<div className="col s12">
										<h4 className="no-margin-bot">みんなのサポート <a href="#!" className="right btn featured-btn">もっと</a></h4>
									</div>
								</div>
								<div className="row no-margin-bot">
									{ this.handleSupporterDataV() }
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<br/>
						<div className="col s12">
							<div className="card-panel">
								<div className="center">
									<h5>Buddiesは海外から来た人と現地のつなげwin-winを作るサービスです。</h5>
									<hr/>
									<img src="https://i.imgur.com/4TCm4Ec.png" alt="service breakdown" />
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<br/>
						<div className="col s12">
							<div className="row">
								<div className="col s12">
									<div className="card-panel">
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
				</div>
			</div>
		)
	}
}

export default Featured