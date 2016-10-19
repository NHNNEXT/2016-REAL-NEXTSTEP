import React, { Component } from 'react'
import { Link } from 'react-router'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './css/Profile.css'


class component extends Component {

state = {
	show : false
}
//\f007
toggle = () => {
	this.setState({show:!this.state.show});
}
show = () => {
	this.setState({show:true});
}
hide = () => {
	this.setState({show:false});	
}

  render() {
  	const {isLink} = this.props;
  	let is_show = this.state.show;
    return (
    
    <div className="header-profile">
        <div className="btn header-btn" onClick={this.toggle}><img src=""/> <strong>Profile</strong></div>
			

  <div className="profile-dialog modal-dialog modal-sm" role="document" style={{display:(is_show?"block":"none")}}>
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.close}><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="exampleModalLabel">Profile Name</h4>
      </div>
      <div className="modal-body">
<ul className="list-group">
  <li className="list-group-item">Profile</li>
  <li className="list-group-item">My Lectures</li>
  <li className="list-group-item last">Logout</li>
</ul>
      </div>
    </div>
  </div>


      </div>
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
