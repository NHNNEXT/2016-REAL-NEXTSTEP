import React, { Component } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import * as NEXTActions from '../actions'



export default class AddGoal extends Component {
state = {
	edit : false
}

editMode = () => {
	this.setState({edit:true});	
}

addCourse = () => {
	console.log(this);
	const title = this.refs.title.value;
	//NEXTActions.fetchAddGoal(this.props.actions, title, this.props.course.id);
	this.setState({edit:false});
	//NEXTActions
}
renderEdit() {
	return (
		<div className="goal-add-controls" style={{display:(this.state.edit?"block":"none")}}>
		<input type="text" className="form-control" ref="title" placeholder="Add a list..."/>
		 <button type="button" className="btn btn-primary" onClick={this.addCourse}>Add</button>
		</div>
	
	)
}
  render() {


    return (
      <div className="add-goal">
      	<div className={classNames({"add-course-card-content" : true,"mod-edit": this.state.edit})}>
      		<span className="add-placeholder" onClick={this.editMode}  style={{display:(this.state.edit?"none":"block")}}>Add a list...</span>
        	{this.renderEdit()}
        </div>
        	
      </div>
    )
  }
}
