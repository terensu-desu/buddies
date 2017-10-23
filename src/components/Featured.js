import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Featured extends Component{
	handleData() {
		const data = this.props.data
		const dataMap = data.map((item, i) => {
			return (
				<div key={i}>
					<Link to={ item.url }>
						<img src={ item.img } alt="carousel preview" />
						<div>{ item.title } - <span>{ item.category }</span></div>
						<div>{ item.host } - <span>{ item.date }</span></div>
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
								{ this.handleData() }
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<h4>おすすめ</h4>
							<div className="featured-carousel">
								{ this.handleData() }
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Featured