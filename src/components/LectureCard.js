import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './css/LectureCard.css'


class LectureCard extends Component {
  static propTypes = {
    lecture: PropTypes.object.isRequired
  }

//\f007
applyCourse = (e) => {
	if(!confirm("강의를 신청하시겠습니까?"))
		return;
		
		
	const {actions, lecture} = this.props;
	NEXTActions.fetchAddMyLecture(actions, lecture.id);
}
renderApply() {
    const {  name, id} = this.props.lecture;	
	return (
   <a href="#" className="lecture-title" onClick={this.applyCourse}>
    	<span className="lecture-title-name">{name}</span>
    	<span className="lecture-card-options">
    		<i className="fa fa-star-o"></i>
    	</span>
	</a>
        )
}
renderLink() {
    const {  name, id , professor} = this.props.lecture;
	return (
   <Link to={"/lecture/"+ id} className="lecture-title">
    	<p className="lecture-title-name">{name}</p>
    	{(professor)?(
	<p className="lecture-professor-name">{professor.name}</p>
	) : ""}
    	<span className="lecture-card-options">
    		<i className="fa fa-star-o"></i>
    	</span>
	</Link>
        )
}
  render() {
  	const {isLink} = this.props;
    
    return (
      <li className="lecture-card col-xs-12 col-sm-6 col-md-3">
		{
			isLink?this.renderLink():this.renderApply()
		}	    
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
)(LectureCard)
