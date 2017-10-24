import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Featured extends Component{
	handleEventData() {
		const data = this.props.eventData
		const dataMap = data.map((item, i) => {
			return (
				<div key={i}>
					<Link to={ item.url }>
						<img className="carsoul-thumb-img" src={ item.img } alt="carousel preview" />
						<div>{ item.title }</div>
						<div><span>{ item.category }</span></div>
						<div>{ item.host } - <span>{ item.date }</span></div>
						<div>{ item.rating } - <span>{ item.price }</span></div>
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
				<div key={i}>
					<Link to={ item.url }>
						<img className="carsoul-thumb-img" src={ item.img } alt="carousel preview" />
						<div>{ item.supporter }</div>
						<div><span>{ item.experience }</span></div>
						<div>{ item.languages } - <span>{ item.time }</span></div>
						<div>{ item.rating } - <span>{ item.price }</span></div>
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
							<h4>生活</h4>
							<div className="featured-carousel">
								{ this.handleEventData() }
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<h4>サポート</h4>
							<div className="featured-carousel">
								{ this.handleSupporterData() }
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Featured