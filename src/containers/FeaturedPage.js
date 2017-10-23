import React, { Component } from 'react'
import Featured from '../components/Featured'

// this will receive state data and send data to Featured.js
class FeaturedPage extends Component{
	constructor() {
		super()
		this.state = {
			data: [
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "10/31/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/200x160",
					url: "/event/1"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/01/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/200x160",
					url: "/event/2"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/02/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/200x160",
					url: "/event/3"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/03/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/200x160",
					url: "/event/4"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/04/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/200x160",
					url: "/event/5"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/05/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/200x160",
					url: "/event/6"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/06/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/200x160",
					url: "/event/7"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/07/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/200x160",
					url: "/event/8"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/08/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/200x160",
					url: "/event/9"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/09/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/200x160",
					url: "/event/10"
				},
			]
		}
	}

	render() {
		return (
			<Featured data={ this.state.data }/>
		)
	}
}

export default FeaturedPage