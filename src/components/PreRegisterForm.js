import React, { Component } from "react";

export default class PreRegisterForm extends Component{
	componentDidMount() {
		const script1 = document.createElement('script');
		script1.setAttribute(
			"src",
			"//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
		);
		const script2 = document.createElement('script');
		script2.innerhtml =
		`<script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';
					$.extend($.validator.messages, {
					  required: "このフィールドは必須です。",
					  remote: "このフィールドを修正してください。",
					  email: "有効なEメールアドレスを入力してください。",
					  url: "有効なURLを入力してください。",
					  date: "有効な日付を入力してください。",
					  dateISO: "有効な日付（ISO）を入力してください。",
					  number: "有効な数字を入力してください。",
					  digits: "数字のみを入力してください。",
					  creditcard: "有効なクレジットカード番号を入力してください。",
					  equalTo: "同じ値をもう一度入力してください。",
					  accept: "有効な拡張子を含む値を入力してください。",
					  maxlength: $.validator.format("{0} 文字以内で入力してください。"),
					  minlength: $.validator.format("{0} 文字以上で入力してください。"),
					  rangelength: $.validator.format("{0} 文字から {1} 文字までの値を入力してください。"),
					  range: $.validator.format("{0} から {1} までの値を入力してください。"),
					  max: $.validator.format("{0} 以下の値を入力してください。"),
					  min: $.validator.format("{1} 以上の値を入力してください。")
					});}(jQuery));var $mcj = jQuery.noConflict(true);</script>`;
		document.body.appendChild(script1);
		document.body.appendChild(script2);
	}

	render() {
		const style1 = {
			display: 'none'
		};
		const style2 = {
			position: "absolute",
			left: "-5000px"
		};
		return(
			<div className="card-panel card-round">
				<div id="mc_embed_signup">
					<form action="https://github.us17.list-manage.com/subscribe/post?u=c738b2ce292af6535fabc6a0e&amp;id=819c7b7844" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" noValidate>
					    <div id="mc_embed_signup_scroll">
						<h2>事前登録開始！登録するとサービス開始が通知されます！</h2>
					<div class="indicates-required"><span class="asterisk">*</span> 必須</div>
					<div class="mc-field-group">
						<label for="mce-NAME">お名前  <span class="asterisk">*</span>
					</label>
						<input type="text" value="" name="NAME" class="required" id="mce-NAME" />
					</div>
					<div class="mc-field-group">
						<label for="mce-EMAIL">メールアドレス  <span class="asterisk">*</span>
					</label>
						<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
					</div>
						<div id="mce-responses" class="clear">
							<div class="response" id="mce-error-response" style={style1}></div>
							<div class="response" id="mce-success-response" style={style1}></div>
						</div>
					    <div style={style2} aria-hidden="true"><input type="text" name="b_c738b2ce292af6535fabc6a0e_819c7b7844" tabIndex="-1" value="" /></div>
					    <div class="clear"><input type="submit" value="登録する" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
					    </div>
					</form>
				</div>
				<a className="btn orange darken-3" href="http://eepurl.com/dfLNgv">外部リンクで登録する</a>
			</div>
		);
	}	
}