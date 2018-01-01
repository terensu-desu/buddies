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
		}
		const style2 = {
			position: "absolute",
			left: "-5000px"
		}
		return(
			<div className="card-panel card-round">
				<div id="mc_embed_signup">
					<form action="https://github.us17.list-manage.com/subscribe/post?u=c738b2ce292af6535fabc6a0e&amp;id=819c7b7844" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
				    <div id="mc_embed_signup_scroll">
							<h2>サービスのために事前登録！ ニュースとサービスが生中継されると連絡があります。</h2>
							<div className="indicates-required"><span className="asterisk">*</span> 必要があることを示す</div>
							<div className="mc-field-group">
								<label htmlFor="mce-EMAIL">電子メールアドレス  <span className="asterisk">*</span></label>
								<input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL"/>
							</div>
							<div className="mc-field-group">
								<label htmlFor="mce-FNAME">ファーストネーム  <span className="asterisk">*</span></label>
								<input type="text" value="" name="FNAME" className="required" id="mce-FNAME" />
							</div>
							<div className="mc-field-group">
								<label htmlFor="mce-LNAME">苗字  <span className="asterisk">*</span></label>
								<input type="text" value="" name="LNAME" className="required" id="mce-LNAME"/>
							</div>
							<div id="mce-responses" className="clear">
								<div className="response" id="mce-error-response" style={style1}></div>
								<div className="response" id="mce-success-response" style={style1}></div>
							</div>
					    <div style={style2} aria-hidden="true">
					    	<input type="text" name="b_c738b2ce292af6535fabc6a0e_819c7b7844" tabIndex="-1" value="" />
					    </div>
					    <div className="clear">
					    	<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
					    </div>
				    </div>
					</form>
				</div>
				<a className="btn orange darken-3" href="http://eepurl.com/dfLNgv">External Registration Page</a>
			</div>
		)
	}	
}