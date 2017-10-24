import React, { Component } from 'react'
import Supporter from '../components/Supporter'

// this will receive state data and send data to Supporter.js
class SupporterPage extends Component{
	constructor() {
		super()
		this.state = {
			data: [
				{
					supporter: "Maeda Atsuko",
					supporter_intro: "ゃらね以野み知擢、いあせこ素瀬根夜手阿譜さゆアチユモメラョもそ遊巣、なむまあうけもも列うさるのアクナんみりりはおももょり日知知津ろもら、等手毛派ふ「け以区」課すょ露せみる。",
					status: true,
					languages: "日本語、中国語、英語",
					experience: "AKB48, Actress",
					skills: "Singing, dancing, acting",
					open_time: "10:00 - 17:30",
					img: "https://cdn.cloudpix.co/images/atsuko-maeda/maeda-atsuko-music-4bdda7c2468ef28c2ab1d45f964396dc-large-842017.jpg",
					thumb1: "https://i.pinimg.com/736x/41/20/7e/41207edba6e9ae4e02bde3cca75c851d--rising-sun-guitar.jpg",
					thumb2: "https://www.generasia.com/w/images/thumb/f/ff/Atsuko_maeda_early_2007.jpg/200px-Atsuko_maeda_early_2007.jpg"
				},
				{
					supporter: "Matsumoto Jun",
					supporter_intro: "ゃらね以野み知擢、いあせこ素瀬根夜手阿譜さゆアチユモメラョもそ遊巣、なむまあうけもも列うさるのアクナんみりりはおももょり日知知津ろもら、等手毛派ふ「け以区」課すょ露せみる。",
					status: true,
					languages: "日本語、中国語、英語",
					experience: "Arashi member, Actor",
					skills: "Singing, dancing, acting",
					open_time: "12:00 - 18:30",
					img: "https://i.pinimg.com/originals/0a/d2/f3/0ad2f306599b391863d06f829e55c34b.jpg",
					thumb1: "https://i.mydramalist.com/rNOYNc.jpg",
					thumb2: "https://i.pinimg.com/originals/9c/f6/34/9cf63400c8ad292ffb705c5f8e093cac.jpg"
				},
				{
					supporter: "Hirai Momo",
					supporter_intro: "ゃらね以野み知擢、いあせこ素瀬根夜手阿譜さゆアチユモメラョもそ遊巣、なむまあうけもも列うさるのアクナんみりりはおももょり日知知津ろもら、等手毛派ふ「け以区」課すょ露せみる。",
					status: true,
					languages: "日本語、英語",
					experience: "Twice member",
					skills: "Singing, dancing",
					open_time: "15:00 - 21:00",
					img: "https://i.pinimg.com/736x/38/95/fc/3895fc2cae55432a1a0a9e184362102b--hirai-momo-kpop.jpg",
					thumb1: "https://i.pinimg.com/736x/c1/f3/a8/c1f3a8e80953b9bbc480d752eed616b4--hirai-momo-fangirl.jpg",
					thumb2: "https://pbs.twimg.com/media/CpU1FXuWIAAWIcb.jpg"
				},
				{
					supporter: "Sugi chan",
					supporter_intro: "ゃらね以野み知擢、いあせこ素瀬根夜手阿譜さゆアチユモメラョもそ遊巣、なむまあうけもも列うさるのアクナんみりりはおももょり日知知津ろもら、等手毛派ふ「け以区」課すょ露せみる。",
					status: true,
					languages: "日本語、中国語",
					experience: "Comedian",
					skills: "Comedy",
					open_time: "8:30 - 15:00",
					img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sugichan_%22Children_of_Iron%22_at_Opening_Ceremony_of_the_28th_Tokyo_International_Film_Festival_%2821805360794%29.jpg/1200px-Sugichan_%22Children_of_Iron%22_at_Opening_Ceremony_of_the_28th_Tokyo_International_Film_Festival_%2821805360794%29.jpg",
					thumb1: "https://www.japantimes.co.jp/wp-content/uploads/2013/05/nn20121204a8a.jpg",
					thumb2: "https://sociorocketnews.files.wordpress.com/2012/06/sugichan.jpg?w=580&h=415"
				},
				{
					supporter: "Imoto Ayako",
					supporter_intro: "ゃらね以野み知擢、いあせこ素瀬根夜手阿譜さゆアチユモメラョもそ遊巣、なむまあうけもも列うさるのアクナんみりりはおももょり日知知津ろもら、等手毛派ふ「け以区」課すょ露せみる。",
					status: true,
					languages: "日本語、英語",
					experience: "TV show presenter",
					skills: "Comedy, travel",
					open_time: "5:00 - 12:30",
					img: "https://image.tmdb.org/t/p/h632/vMe7dwdDpsT9qo55fuuoF7JkZVV.jpg",
					thumb1: "https://hoofin.files.wordpress.com/2010/10/imoto-ayako.jpg",
					thumb2: "https://img1.doubanio.com/img/celebrity/large/33PJyKtHBcYcel_avatar_uploaded1397885610.99.jpg"
				},
				{
					supporter: "Edogawa Conan",
					supporter_intro: "ゃらね以野み知擢、いあせこ素瀬根夜手阿譜さゆアチユモメラョもそ遊巣、なむまあうけもも列うさるのアクナんみりりはおももょり日知知津ろもら、等手毛派ふ「け以区」課すょ露せみる。",
					status: true,
					languages: "日本語、中国語、英語",
					experience: "Active Detective",
					skills: "Investigation, problem solving",
					open_time: "2:00 - 20:00",
					img: "https://i.pinimg.com/originals/50/25/65/50256523199849dd1ab2e5fb1f9d9bbb.jpg",
					thumb1: "https://i.pinimg.com/736x/75/0a/73/750a73d5b68e14cafa20ee10263d93c7--manga-anime-anime-girls.jpg",
					thumb2: "https://i.pinimg.com/736x/87/ea/eb/87eaeb14cee9cab3c39b935b816710c7--detective-posts.jpg"
				},
			]
		}
	}
	render() {
		return (
			<div className="section">
				<div className="container">
					<Supporter data={ this.state.data } id={ this.props.match.params.id } />
				</div>
			</div>
		)
	}
}

export default SupporterPage