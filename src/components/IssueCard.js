import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DragDrop from "../class/dragdrop"
import classNames from 'classnames'



class component extends Component {
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



	const issues = this.props.state.course.issues;	
	const myPosition = this.props.position, targetPosition = this.getNodeIndex(card);
	if(myPosition === targetPosition)
		return;
		
	const myissue = issues[myPosition], targetissue = issues[targetPosition];
	const myId = myissue.id, targetId = targetissue.id;
	
	
	this.props.actions.swap("issue", myPosition, targetPosition);
	NEXTActions.fetchSwap(this.props.actions, "issue", myId, targetId);
	
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
  	const {issue} = this.props;
    
    return (
    	<div className={classNames({
	     "issue-card":true,
	     "placeholder":this.state.drag })} ref="card" onDragStart={this.dragstart} onDragOver={this.dragover} onDragEnd={this.dragend}  draggable="true" data-position={this.props.position}>
      <div role="alert" className="alert alert-info lecture-issue" ref="content">
    		<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width:"45%"}}>
    			<span>45%</span> 
			</div>
    		<strong>{issue.title}</strong>
    	</div>
    	</div>
       )
  }
}

const mapStateToProps = state => {
	return {state: state.Viewer}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch), dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component)
