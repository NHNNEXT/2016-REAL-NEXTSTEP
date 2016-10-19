import React, { Component } from 'react'
//import { Link } from 'react-router'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class component extends Component {

state = {
	show : false
}

show = () => {
	
}
hide = () => {
	
}
componentWillMount() {
}
  render() {

    
    return (
      <div className="lecture-participants">
      	<ul>
      		<li></li>
      	</ul>
      </div>
    )
  }
}




const mapStateToProps = state => {
	return {state: state.CourseListPage}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component)
