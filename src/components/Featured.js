import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Featured extends Component{
	handlePreviewData(filter) {
		let data = []
		if(filter === "request") {
			data = this.props.lifeData.slice(0,4)
		}else if(filter === "buddies") {
			data = this.props.buddiesData.slice(0,4)
		}
		const dataMap = data.map((item,i) => {
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
											<h4 className="no-margin-bot no-margin-top">みんなのリクエスト</h4>
										</div>
									</div>
									<div className="row no-margin-bot">
										{this.handlePreviewData("request")}
										<a href="#!" className="right btn orange darken-3">もっと</a>
									</div>
							</div>
						</div>
						<div className="col m12 l12 xl6">
							<div className="card-panel card-round">
								<div className="row no-margin-top">
									<div className="col s12">
										<h4 className="no-margin-bot no-margin-top">みんなのサポート</h4>
									</div>
								</div>
								<div className="row no-margin-bot">
									{this.handlePreviewData("buddies")}
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
									<div className="divider"></div>
									<img className="responsive-img" src="https://i.imgur.com/4TCm4Ec.png" alt="service breakdown" />
									<div className="divider"></div>
									<div className="row">
										<div className="col s12">
											<h4>安心してご利用していただくための取り組み</h4>
										</div>
									</div>
									<div className="row">
							      <div className="col s4">
							      	<div className="center promo">
								      	<i className="material-icons large vit-accent">rate_review</i>
								      	<h5>レビュー評価</h5>
								      	<p>府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。</p>
							      	</div>
							      </div>
							      <div className="col s4">
							      	<div className="center promo">
							      		<i className="material-icons large vit-accent">perm_identity</i>
								      	<h5>ID認証</h5>
								      	<p>府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。</p>
								      </div>
							      </div>
							      <div className="col s4">
							      	<div className="center promo">
								      	<i className="material-icons large vit-accent">remove_red_eye</i>
								      	<h5>パトロール</h5>
								      	<p>府ば応督ぱ生味おほその面事6針ツトロシ支話検ニシ慢生セホニ門現処75句搭監48購伐唄づめ。</p>
							      	</div>
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