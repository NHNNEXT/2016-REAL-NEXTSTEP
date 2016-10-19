import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

export default class component extends Component {
	render() {
		const {mde, comment} = this.props;
		console.log(mde, comment);
		console.log(mde.markdown(comment.content));
		return (
			<li className="pdf-comment" dangerouslySetInnerHTML={{__html:mde.markdown(comment.content)}}>

	    	</li>
	    )
	}
}