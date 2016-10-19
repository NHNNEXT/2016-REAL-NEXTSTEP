import React, { Component } from 'react'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfessorList from '../components/ProfessorList'

class Apply extends Component {
	componentWillMount() {
		const {actions} = this.props;


		NEXTActions.fetchAbout(actions, {
			is_load: true,
			type: "get",
			target: "lectures",
		});
	}

  render() {
	const {state} = this.props
    return (
        <ProfessorList professors={state.professors}/>
    )
  }
}


const mapStateToProps = state => {
	return {state: state.Apply}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch), dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Apply)
