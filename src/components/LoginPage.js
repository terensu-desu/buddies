import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import OktaSignInWidget from './OktaSignInWidget';

export default class LoginPage extends Component{
  render() {
  	if(this.props.authenticated === null) return null;
    return this.props.authenticated ?
	    <Redirect to={{pathname:"/"}}/> :
	    <OktaSignInWidget baseUrl={this.props.baseUrl} onSuccess={this.props.onSuccess} onError={this.props.onError} />
  }
}