import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NEXTActions from '../actions'
import Header from '../components/Header'


class App extends Component {

render(){
	console.log("APP PAGE");
	const { children} = this.props
	

	 return (
  <div>
  	<Header/>
  	<div className="body-wrapper">
  		{children}
  	</div>
  </div>
  );
}
}

const mapStateToProps = state => {
	return {state: state.mainPage}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
