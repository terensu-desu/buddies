import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BrowsePage extends Component {
	constructor(props) {
		super(props);
		this.handlePreviewData = this.handlePreviewData.bind(this);
		this.view = props.displayData.view;
	}

	componentWillReceiveProps(nextProps) {
		this.view = nextProps.displayData.view;
	}

	handlePreviewData(subfilter) {
		let data = [];
		let info = this.props.displayData;
		if(subfilter === "buddies") {
			data = info[this.props.filter].buddies.slice(0,4);
		}else if(subfilter === "life") {
			data = info[this.props.filter].life.slice(0,4);
		}else if(subfilter === "events") {
			data = info[this.props.filter].events.slice(0,4);
		}
		const dataMap = data.map((item,i) => {
			return (
				<li className="" key={i}>
					<div className="card small card-round hoverable">
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
				</li>
			);
		});
		return dataMap;
	}

	render() {
		/*const category = ["すべて","交通","市役所","学校","病院","銀行・金融","子ども","趣味","生活相談",
											"料理","食事","美容・ファッション","生活","文化","学業","お金","子育て","健康",
											"職場","睡眠","ホームパーティ","居酒屋・バー",];*/
		return (
			<div className="container">
				<div className="row">
					<div className="col s2">
						<h4>{this.view.home.filters}</h4>
						<ul>
							{this.view.categories.buddies.map((item, i) => {
								return (<li key={i}><a href="#!">{item}</a></li>)
							})}
							<div className="divider"></div>
							{this.view.categories.life.map((item, i) => {
								return (<li key={i}><a href="#!">{item}</a></li>)
							})}
							<div className="divider"></div>
							{this.view.categories.events.map((item, i) => {
								return (<li key={i}><a href="#!">{item}</a></li>)
							})}
						</ul>
					</div>
					<div className="col s3">
						<h4>{this.view.home.buddies}</h4>
						<ul>
							{this.handlePreviewData("buddies")}
						</ul>
					</div>
					<div className="col s3">
						<h4>{this.view.home.life}</h4>
						<ul>
							{this.handlePreviewData("life")}
						</ul>
					</div>
					<div className="col s3">
						<h4>{this.view.home.events}</h4>
						<ul>
							{this.handlePreviewData("events")}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}