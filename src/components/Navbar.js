import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component{
	render() {
		return (
			<nav>
				<div className="nav-wrapper white accent-text">
					<Link to="/" className="brand-logo accent-text"><img className="vit-logo" src="https://i.imgur.com/zh52eL6.png" alt="logo"/></Link>
					<a className="brand-sublogo accent-text hide-on-med-and-down"><span className="brand-name">Buddies</span>     みんながみんなの心のサプリメント！</a>
					<a href="#!" data-activates="sidebar-nav" className="button-collapse accent-text"><i className="material-icons">menu</i></a>
					<ul id="nav-mobile" className="right hide-on-med-and-down show-on-large">
						<li><a className="nav-link-big last-big dropdown-button accent-text" href="#!" data-activates="category-dropdown1" data-beloworigin="true">カテゴリー<i className="material-icons right">arrow_drop_down</i></a></li>
						<li><a className="accent-text" href="#!">About</a></li>
						<li><a className="accent-text" href="#!">Log In</a></li>
						<li><a className="accent-text" href="#!">Sign Up</a></li>
						<li><a className="dropdown-button accent-text" href="#!" data-activates="lang-dropdown1" data-beloworigin="true"><i className="material-icons right">language</i></a></li>
					</ul>
					<ul className="side-nav center" id="sidebar-nav">
						<li><a className="accent-text" href="#!">心</a></li>
						<li><a className="accent-text" href="#!">生活</a></li>
						<li><a className="accent-text" href="#!">イベント</a></li>
						<li><a className="dropdown-button accent-text" href="#!" data-activates="category-dropdown2" data-beloworigin="true">カテゴリー<i className="material-icons right">arrow_drop_down</i></a></li>
						<li><a className="accent-text" href="#!">About</a></li>
						<li><a className="accent-text" href="#!">Log In</a></li>
						<li><a className="accent-text" href="#!">Sign Up</a></li>
						<li><a className="dropdown-button accent-text" href="#!" data-activates="lang-dropdown2" data-beloworigin="true"><span><i className="side-nav-icon material-icons left">language</i></span></a></li>
					</ul>
					<ul id="category-dropdown1" className="dropdown-content">
						<li><p className="category-header center">すべてお手伝いメンター</p></li>
						<li className="divider"></li>
						<li><a className="accent-text center" href="#!">交通</a></li>
						<li><a className="accent-text center" href="#!">市役所</a></li>
						<li><a className="accent-text center" href="#!">学校</a></li>
						<li><a className="accent-text center" href="#!">病院</a></li>
						<li><a className="accent-text center" href="#!">銀行・金融</a></li>
						<li><a className="accent-text center" href="#!">子ども</a></li>
						<li><a className="accent-text center" href="#!">趣味</a></li>
						<li><a className="accent-text center" href="#!">生活相談</a></li>
						<li><a className="accent-text center" href="#!">料理</a></li>
						<li><a className="accent-text center" href="#!">食事</a></li>
						<li><a className="accent-text center" href="#!">美容・ファッション</a></li>
						<li><a className="accent-text center" href="#!">その他</a></li>
						<li className="divider"></li>
						<li><p className="category-header center">心のメンター</p></li>
						<li className="divider"></li>
						<li><a className="accent-text center" href="#!">生活</a></li>
						<li><a className="accent-text center" href="#!">文化</a></li>
						<li><a className="accent-text center" href="#!">学業</a></li>
						<li><a className="accent-text center" href="#!">お金</a></li>
						<li><a className="accent-text center" href="#!">子育て</a></li>
						<li><a className="accent-text center" href="#!">健康</a></li>
						<li><a className="accent-text center" href="#!">職場</a></li>
						<li><a className="accent-text center" href="#!">睡眠</a></li>
						<li><a className="accent-text center" href="#!">その他</a></li>
						<li className="divider"></li>
						<li><p className="category-header center">イベント</p></li>
						<li className="divider"></li>
						<li><a className="accent-text center" href="#!">ホームパーティ</a></li>
						<li><a className="accent-text center" href="#!">居酒屋・バー</a></li>
						<li><a className="accent-text center" href="#!">その他</a></li>
					</ul>
					<ul id="category-dropdown2" className="dropdown-content">
						<li><p className="category-header center">すべてお手伝いメンター</p></li>
						<li className="divider"></li>
						<li><a className="accent-text center" href="#!">交通</a></li>
						<li><a className="accent-text center" href="#!">市役所</a></li>
						<li><a className="accent-text center" href="#!">学校</a></li>
						<li><a className="accent-text center" href="#!">病院</a></li>
						<li><a className="accent-text center" href="#!">銀行・金融</a></li>
						<li><a className="accent-text center" href="#!">子ども</a></li>
						<li><a className="accent-text center" href="#!">趣味</a></li>
						<li><a className="accent-text center" href="#!">生活相談</a></li>
						<li><a className="accent-text center" href="#!">料理</a></li>
						<li><a className="accent-text center" href="#!">食事</a></li>
						<li><a className="accent-text center" href="#!">美容・ファッション</a></li>
						<li><a className="accent-text center" href="#!">その他</a></li>
						<li className="divider"></li>
						<li><p className="category-header center">心のメンター</p></li>
						<li className="divider"></li>
						<li><a className="accent-text center" href="#!">生活</a></li>
						<li><a className="accent-text center" href="#!">文化</a></li>
						<li><a className="accent-text center" href="#!">学業</a></li>
						<li><a className="accent-text center" href="#!">お金</a></li>
						<li><a className="accent-text center" href="#!">子育て</a></li>
						<li><a className="accent-text center" href="#!">健康</a></li>
						<li><a className="accent-text center" href="#!">職場</a></li>
						<li><a className="accent-text center" href="#!">睡眠</a></li>
						<li><a className="accent-text center" href="#!">その他</a></li>
						<li className="divider"></li>
						<li><p className="category-header center">イベント</p></li>
						<li className="divider"></li>
						<li><a className="accent-text center" href="#!">ホームパーティ</a></li>
						<li><a className="accent-text center" href="#!">居酒屋・バー</a></li>
						<li><a className="accent-text center" href="#!">その他</a></li>
					</ul>
					<ul id="lang-dropdown1" className="dropdown-content">
						<li><a className="accent-text center" href="#!">日本語</a></li>
						<li><a className="accent-text center" href="#!">English</a></li>
						<li><a className="accent-text center" href="#!">中文</a></li>
					</ul>
					<ul id="lang-dropdown2" className="dropdown-content">
						<li><a className="accent-text center" href="#!">日本語</a></li>
						<li><a className="accent-text center" href="#!">English</a></li>
						<li><a className="accent-text center" href="#!">中文</a></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar