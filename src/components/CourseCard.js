import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import { connect } from 'react-redux';
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import DragDrop from "../class/dragdrop"

export default connect(
	state => ({state: state.CourseListPage}),
	dispatch => ({ actions: bindActionCreators(NEXTActions, dispatch), dispatch})
)
(class CourseCard extends Component {

  state = {
	  drag : false
  }
  dragndrop = new DragDrop();
  
dragover = (e) => {
	const {card, content} = this.refs;
	
	this.dragndrop.dragover(e, card, content);

	if(!this.state.drag)
		return;

}
dragstart= (e) => {
	console.log("dragstart");
	this.setState({drag:true});
	
	const {card, content} = this.refs;
	this.dragndrop.dragstart(e,card,content);

}
dragend = (e) => {
	if(!this.state.drag)
		return;
		
	this.setState({drag:false});
	
	const {card, content} = this.refs;
	this.dragndrop.dragend(e, card, content);



	const courses = this.props.state.lecture.courses;	
	const myPosition = this.props.position, targetPosition = this.getNodeIndex(card);
	if(myPosition === targetPosition)
		return;
		
	const myCourse = courses[myPosition], targetCourse = courses[targetPosition];
	const myId = myCourse.id, targetId = targetCourse.id;
	
	
	this.props.actions.swap("course", myPosition, targetPosition);
	NEXTActions.fetchSwap(this.props.actions, "course", myId, targetId);
	
}

getNodeIndex = (node) => {
    var index = 0;
    while ( (node = node.previousSibling) ) {
        if (node.nodeType != 3 || !/^\s*$/.test(node.data)) {
            index++;
        }
    }
    return index;
}
  render() {
    const {  id, title, issues } = this.props.course;
    const lectureId = this.props.lecture.id;


    return (
      <div className={classNames({
	     "course-card":true,
	     "placeholder":this.state.drag 
      })}  ref="card" onDragStart={this.dragstart} onDragOver={this.dragover} onDragEnd={this.dragend}  draggable="true" data-position={this.props.position}>
	       <div className="course-card-content" ref="content">

	        	<h2 title="실전 프로젝트" dir="auto" className="course-title-name">{title}</h2>
	       		<Link to={"/view/" + lectureId}>
	        	<ul className="course-card-issues">
	        		{issues.map(issue => (<li key={issue.id}>{issue.title}</li>))}
	        	</ul>
	        	</Link>
        	</div>
      </div>
    )
  }
}
)