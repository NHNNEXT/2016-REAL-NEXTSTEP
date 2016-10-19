import React, { Component } from 'react'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfessorList from '../components/ProfessorList'
import Apply from './Apply'
import LectureCard from '../components/LectureCard'

class mainPage extends Component {
	componentWillMount() {
		const {_actions, actions} = this.props;

		document.body.className = "";
		
		NEXTActions.fetchAbout(actions, {
			is_load: true,
			type: "get",
			target: "my_lectures",
		});
		
	}

  render() {
	const {state, actions} = this.props
	console.log(state);
    return (
    	<section className="content">
    		<div className="page-header"><h3>신청한 강의 목록</h3></div>
    		<ul className="lecture-list">
    		{state.lectures.map(lecture => (
    			
    			<LectureCard isLink="true" lecture={lecture} />
    		))}
    		</ul>
    		
    		<div className="page-header"><h3>강의 신청하기</h3></div>
        <Apply/>
        </section>
    )
  }
}


const mapStateToProps = state => {
	return {state: state.MyLectures}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch), dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mainPage)
