import React, { Component } from 'react'
//import { Link } from 'react-router'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './css/LectureCard.css'


class component extends Component {

state = {
	edit : false
}
//\f007
editMode = () => {
	this.setState({edit:true});
}
add = (e) => {
	const {actions, lecture, professor} = this.props;
	const name = this.refs.name;
	
	NEXTActions.fetch(actions, {type:"add", target:"lecture", by:"professor", value : {
		name : name.value,
		professor : professor.id
	},
	}).then(function(value) {
		actions.load({type:"add", target:"lecture", value:{name:value.name, id:3}});
	});
	
	name.value = "";
	
	this.close();
}

close = (e) => {
	this.setState({edit:false})
}

  render() {
  	const {isLink} = this.props;
  	const is_edit = this.state.edit;
    
    return (
      <li className="lecture-card lecture-card-add col-xs-12 col-sm-6 col-md-3">
			<a onClick={this.editMode}>Create New Lecture...    </a>
			

  <div className="lecture-card-add-dialog modal-dialog modal-sm" role="document" style={{display:(is_edit?"block":"none")}}>
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.close}><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="exampleModalLabel">Create Lecture</h4>
      </div>
      <div className="modal-body">
          <div className="form-group">
            <label className="control-label">Name:</label>
            <input type="text" className="form-control" id="recipient-name" ref="name"/>
          </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-success" onClick={this.add}> Create </button>
      </div>
    </div>
  </div>

      </li>
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
)(component)
