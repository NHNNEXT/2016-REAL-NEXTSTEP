import React, { Component } from 'react'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import { Link } from 'react-router'
import IssueCard from './IssueCard'
import AddIssue from './Viewer.add.issue'

//import Go from "../class/Go"
import './css/Viewer.css'





class Viewer extends Component {
	componentWillMount() {
		const {actions, id} = this.props;
		
		NEXTActions.fetchAbout(actions, {type:"get", target:"course", body:"id=" + id});
		document.body.classList.add("modal-open");
		
		
            
		//console.log("req", require);
	}
	handleClose = (e) => {
		document.body.classList.remove("modal-open");
	}
	handleOutsideClose = (e) => {
		if(e.target !== this.refs.modal)
			return;
		
		this.refs.close.handleClick(e);
		
	}
  render() {
  	const course = this.props.state.course;
	 const {title, issues, lectureId} = course;
    return (
<div className="modal fade in" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" style={{display:"block", background:"rgba(0,0,0,0.3)"}} onClick={this.handleOutsideClose} ref="modal">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <Link to={"/lecture/" + lectureId} onClick={this.handleClose} ref="close"><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></Link>
        <h3 className="modal-title" id="myModalLabel">{title}</h3>
      </div>
      <div className="modal-body">
      	<h4 className="lecture-issues-title"><span className="glyphicon glyphicon-education"></span>issues</h4>
        <div className="lecture-issues">
        	{issues.map((issue,i) => (
	        	<IssueCard issue={issue} key={i}  position={i}/>
        	))}
        	<AddIssue course={course}/>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
     
    )
  }
}


const mapStateToProps = state => {
	return {state: state.Viewer}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewer)
