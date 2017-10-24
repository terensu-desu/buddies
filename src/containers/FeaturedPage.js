import React, { Component } from 'react'
import Featured from '../components/Featured'

// this will receive state data and send data to Featured.js
class FeaturedPage extends Component{
	constructor() {
		super()
		this.state = {
			event_data: [
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "10/31/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/220x160",
					url: "/event/1"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/01/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/220x160",
					url: "/event/2"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/02/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/220x160",
					url: "/event/3"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/03/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/220x160",
					url: "/event/4"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/04/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/220x160",
					url: "/event/5"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/05/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/220x160",
					url: "/event/6"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/06/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/220x160",
					url: "/event/7"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/07/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/220x160",
					url: "/event/8"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/08/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/220x160",
					url: "/event/9"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/09/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://via.placeholder.com/220x160",
					url: "/event/10"
				},
			],
			supporter_data: [
				{
					supporter: "Maeda Atsuko",
					experience: "AKB48, Actress",
					languages: "日本語、中国語、英語",
					time: "10:00 - 17:30",
					rating: "5/5 Stars",
					price: "¥3000 / 時間",
					img: "https://via.placeholder.com/220x160",
					url: "/supporter/1"
				},
				{
					supporter: "Matsumoto Jun",
					experience: "Arashi member, Actor",
					languages: "日本語、中国語、英語",
					time: "12:00 - 18:30",
					rating: "5/5 Stars",
					price: "¥3000 / 時間",
					img: "https://via.placeholder.com/220x160",
					url: "/supporter/2"
				},
				{
					supporter: "Hirai Momo",
					experience: "Twice member",
					languages: "日本語、英語",
					time: "15:00 - 21:00",
					rating: "5/5 Stars",
					price: "¥3000 / 時間",
					img: "https://via.placeholder.com/220x160",
					url: "/supporter/3"
				},
				{
					supporter: "Sugi chan",
					experience: "Comedian",
					languages: "日本語、中国語",
					time: "8:30 - 15:00",
					rating: "5/5 Stars",
					price: "¥3000 / 時間",
					img: "https://via.placeholder.com/220x160",
					url: "/supporter/4"
				},
				{
					supporter: "Imoto Ayako",
					experience: "TV show presenter",
					languages: "日本語、英語",
					time: "5:00 - 12:30",
					rating: "5/5 Stars",
					price: "¥3000 / 時間",
					img: "https://via.placeholder.com/220x160",
					url: "/supporter/5"
				},
				{
					supporter: "Edogawa Conan",
					experience: "Detective",
					languages: "日本語、中国語、英語",
					time: "2:00 - 20:00",
					rating: "5/5 Stars",
					price: "¥3000 / 時間",
					img: "https://via.placeholder.com/220x160",
					url: "/supporter/6"
				},
			]
		}
	}

	render() {
		return (
			<Featured eventData={ this.state.event_data } supporterData={ this.state.supporter_data } />
		)
	}
}

export default FeaturedPage