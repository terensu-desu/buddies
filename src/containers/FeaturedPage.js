import React, { Component } from 'react';
import Featured from '../components/Featured';
import Loading from '../components/Loading';
import store from '../store';

// this will receive state data, like language, and display data from the store to Featured.js
export default class FeaturedPage extends Component{
	constructor(props) {
		super(props);
    this.state = { loading: true };
		this.data = store.retrieveData(props.lang);
	}

  componentWillReceiveProps(nextProps) {
    this.data = store.retrieveData(nextProps.lang);
  }

  componentWillMount() {
    setTimeout(() =>{
      this.setState({
        loading: false
      });
    }, 1500);
  }

	render() {
		return this.state.loading ? <Loading /> : <Featured displayData={this.data} />
	}
}