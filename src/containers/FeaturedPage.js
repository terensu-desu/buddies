import React, { Component } from 'react'
import Featured from '../components/Featured'

// this will receive state data and send data to Featured.js
class FeaturedPage extends Component{
	constructor() {
		super()
		this.state = {
			life_data: [
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "10/31/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/people?t=1509023119587",
					url: "/life/1"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/01/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any",
					url: "/life/2"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/02/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509023596355",
					url: "/life/3"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/03/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/people?t=1509023130422",
					url: "/life/4"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/04/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509023688995",
					url: "/life/5"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/05/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509023796532",
					url: "/life/6"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/06/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509023807155",
					url: "/life/7"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/07/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/tech",
					url: "/life/8"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/08/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/tech?t=1509023264369",
					url: "/life/9"
				},
			],
			supporter_data: [
				{
					supporter: "Maeda Yuna",
					experience: "Psychologist",
					languages: "日本語、英語",
					time: "10:00 - 17:30",
					rating: "5/5 Stars",
					price: "¥3000 / 時間",
					img: "https://placeimg.com/300/250/any/sepia",
					url: "/supporter/1"
				},
				{
					supporter: "Matsumoto Jon",
					experience: "Financial Specialist",
					languages: "日本語、中国語、英語",
					time: "12:00 - 18:30",
					rating: "5/5 Stars",
					price: "¥3000 / 時間",
					img: "https://placeimg.com/300/250/people?t=1509023124699",
					url: "/supporter/2"
				},
				{
					supporter: "Hirai Moka",
					experience: "Privacy Specialist",
					languages: "日本語、英語",
					time: "15:00 - 21:00",
					rating: "5/5 Stars",
					price: "¥3000 / 時間",
					img: "https://placeimg.com/300/250/people?t=1509023127964",
					url: "/supporter/3"
				},
				{
					supporter: "Sugiura Chan",
					experience: "Suicide Prevention",
					languages: "日本語、中国語",
					time: "8:30 - 15:00",
					rating: "5/5 Stars",
					price: "¥3000 / 時間",
					img: "https://placeimg.com/300/250/people?t=1509023146097",
					url: "/supporter/4"
				},
				{
					supporter: "Imoto Ayano",
					experience: "Career Consultant",
					languages: "日本語、英語",
					time: "5:00 - 12:30",
					rating: "5/5 Stars",
					price: "¥3000 / 時間",
					img: "https://placeimg.com/300/250/people?t=1509023171413",
					url: "/supporter/5"
				},
				{
					supporter: "Edogawa Kodai",
					experience: "Detective",
					languages: "日本語、中国語、英語",
					time: "2:00 - 20:00",
					rating: "5/5 Stars",
					price: "¥3000 / 時間",
					img: "https://placeimg.com/300/250/people?t=1509023155944",
					url: "/supporter/6"
				},
			],
			event_data: [
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/04/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509023859468",
					url: "/events/1"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/05/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509024027842",
					url: "/events/2"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/06/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509024039437",
					url: "/events/3"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/07/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509024050635",
					url: "/events/4"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/08/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509024070823",
					url: "/events/5"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/09/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509024091387",
					url: "/events/6"
				},
				{
					title: "庄内緑地公園バーベキュー",
					category: "Social",
					host: "山田涼介",
					date: "11/10/2017",
					rating: "5/5 Stars",
					price: "¥3000 / 人",
					img: "https://placeimg.com/300/250/any?t=1509024097862",
					url: "/events/7"
				},
			]
		}
	}

	render() {
		return (
			<Featured lifeData={ this.state.life_data } supporterData={ this.state.supporter_data } eventData={ this.state.event_data } />
		)
	}
}

export default FeaturedPage