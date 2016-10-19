import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import {JSLoad, CSSLoad} from '../js/Loader.js'
import PDFComment from './PDFComment.js'


class component extends Component {

state = {
	show: true,
	load_mark : false
}
mde = "";
textarea  = (<textarea className="form-control comment-input" ref="name"></textarea>)
componentWillMount() {
	CSSLoad("/css/simplemde.min.css").then((js) => {
	});
	NEXTActions.fetchAbout(this.props.actions, {
		is_load: true,
		type: "get",
		target: "comments",
	});

}
componentDidMount() {
	JSLoad("/js/simplemde.min.js").then((js) => {
		this.mde = new window.SimpleMDE({
				element: this.refs.name,
				status:false,
	    		showIcons: ["code"],
	    		placeholder: "Type here...",
	    		hideIcons: ["guide", "italic", "fullscreen", "side-by-side","ordered-list", "preview"],		
	    		toolbar: false
			});
		this.setState({load_mark:true});
	});
}
submitComment = (e) => {
	const value = this.mde.value();
	NEXTActions.fetchAbout(this.props.actions, {
		is_load: true,
		type: "add",
		target: "comment",
		comment : {
			id: 10,
			content: value
		}
	});
	this.mde.value("");
}
renderComments() {
	const {comments} = this.props.state;	
	if(!this.state.load_mark)
		return(<div className="pdf-comments"></div>)
	return(<div className="pdf-comments">
    		<ul>
    			{ comments.map((comment,i) => (
	    			<PDFComment comment={comment} key={i} mde={this.mde}/>
    			))}
    			
    		</ul>
    	</div>)
}
render() {


    return (
    	<div className={classNames({
    		"pdf-comments-wrapper":true,
    		"show":this.state.show,
    	})}>
    		
	    	{this.renderComments()}
	    	<div className="pdf-comment-form form-group">
	            	{this.textarea}
                   <button type="button" className="btn btn-info comment-submit" onClick={this.submitComment}> POST </button>
          </div>
      </div>
    )
    
}

componentDidUpdate() {
	//..if(this.state.is	
}
}

const mapStateToProps = state => {
	return {state: state.PDFView}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch), dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component)
