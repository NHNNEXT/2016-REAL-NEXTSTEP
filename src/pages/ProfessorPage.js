import React, { Component } from 'react'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LectureCard from '../components/LectureCard'
import LectureCardAdd from '../components/LectureCard.add'
import Viewer from '../components/Viewer'
import './css/ProfessorPage.css'


class Page extends Component {
	
	componentWillMount() {
		document.body.className = "";
		const {actions, params} = this.props;
		const {professorId} = params;
	
		NEXTActions.fetchAbout(actions, {type:"get", target:"professor", body:"id=" + professorId});
		
			
	}
	renderHeader() {
		const {name, lectures} = this.props.state.professor;

			

		return (
			<div className="professor-header">
				  <div className="professor-content">
		 <span className="profile-image glyphicon glyphicon-user"></span>
				<span className="professor-name">{name}</span>
				<span className="lecture-header-status"></span>
				</div>
			</div>
			
		)
	}
	render() {
		const {professor, actions} = this.props.state;
		const lectures = professor.lectures
		
		
  		return (
  		<div>
  		{this.renderHeader()}
  		<div className="professor-content">
    	<ul className="lecture-list row">
          {lectures.map(lecture =>
            <LectureCard isLink="true" lecture={lecture} key={lecture.id} actions={actions} />
          )}
            <LectureCardAdd actions={actions} professor={professor} />
    	</ul>
   		</div>
   		</div>
  		)
  	}
}


const mapStateToProps = state => {
	return {state: state.ProfessorPage}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
