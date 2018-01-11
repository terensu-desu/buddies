import React, { Component } from 'react';
import DetailPage from '../components/DetailPage';
import Loading from '../components/Loading';
import store from '../store';

// this will receive state data, like language, and display data from the store to DetailPage.js
export default class DetailPageFilter extends Component{
	constructor(props) {
		super(props);
		this.state = { loading: true };
		this.data = store.retrieveDetailData(props.lang, props.match.params.section, props.match.params.page, props.match.params.id);
	}

	componentWillReceiveProps(nextProps) {
    this.data = store.retrieveDetailData(nextProps.lang, nextProps.match.params.section, nextProps.match.params.page, nextProps.match.params.id);
  }

  componentWillMount() {
  	setTimeout(() =>{
  		this.setState({
  			loading: false
  		});
  	}, 1500);
  }

	render() {
		return this.state.loading ? <Loading /> : <DetailPage data={this.data} />
	}
}