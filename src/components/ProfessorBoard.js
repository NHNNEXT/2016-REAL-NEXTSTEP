import React, { Component, PropTypes } from 'react'
import LectureCard from './LectureCard'
import './css/ProfessorBoard.css'
import { Link } from 'react-router'


export default class ProfessorBoard extends Component {
  static propTypes = {
    professor: PropTypes.object.isRequired,
  }

  renderHeader() {
    const { id, name } = this.props.professor
	return (
	 <div className="professor-board-header">

		 <h3 className="professor-board-header-name"><span className="glyphicon glyphicon-user"></span> <Link to={"/professor/" + id}>{name}</Link></h3>
	 </div>
	)  
  }

  render() {
    const { lectures, name, actions } = this.props.professor

    return (
    	<div className="professor-board">
    	{this.renderHeader()}  
    	<ul className="lecture-list row">
          {lectures.map(lecture =>
            <LectureCard lecture={lecture} key={lecture.id} actions={actions} />
          )}

    	</ul>
    	</div>

    )
    
    }
}
