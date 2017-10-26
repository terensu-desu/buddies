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
							<div className="col s12">
								<div className="left">{ item.host }</div>
								<span className="right">{ item.date }</span>
							</div>
						</div>
						<div className="row featured-row">
							<div className="col s12">
								<div className="star-ratings-css left">
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

	handleSupporterData() {
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
								<div className="star-ratings-css left">
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

	handleEventData() {
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
								<div className="star-ratings-css left">
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
		return (
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col s12">
							<h4 className="no-margin-bot">生活 <a href="#!" className="right btn featured-btn">See all</a></h4>
							<div className="featured-carousel">
								{ this.handleLifeData() }
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<h4 className="no-margin-bot">心 <a href="#!" className="right btn featured-btn">See all</a></h4>
							<div className="featured-carousel">
								{ this.handleSupporterData() }
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<h4 className="no-margin-bot">イベント <a href="#!" className="right btn featured-btn">See all</a></h4>
							<div className="featured-carousel">
								{ this.handleEventData() }
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Featured