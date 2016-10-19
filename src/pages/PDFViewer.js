import React, { Component } from 'react'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import { Link } from 'react-router'

import {JSLoad} from '../js/Loader.js'
import PDFLoader from '../class/PDFLoader.js'

import Page from "../pdf/PDFPage"
import PDFComments from "../pdf/PDFComments"

import "./css/PDFViewer.css"

class Viewer extends Component {
	pdfjs = "";
	
	state = {
		pdf_load : false
	}
	componentWillMount() {
		const {actions, id} = this.props;
		document.body.className="pdf-open";
		
		NEXTActions.fetchAbout(actions, {type:"get", target:"attachment", body:"id=" + id});
		const self = this;
		
		JSLoad("/js/pdf.js").then((js) => {
			self.pdfjs = new PDFLoader("/lec02a.pdf");
			self.pdfjs.init().then(() => {
				self.setState({pdf_load:true});
			});
		});
            
	}
	componentWillUnmount() {
		document.body.className="";
	}
	
	addZoom = () => {
		this.pdfjs.addZoom();
	}
	minusZoom = () => {
		this.pdfjs.minusZoom();		
	}
	renderButtons() {
	return (
		<div className="pdf-btn-wrapper">
			<a className="pdf-btn btn btn-default" role="button" onClick={this.addZoom}>+</a>
			<a className="pdf-btn btn btn-default" role="button" onClick={this.minusZoom}>-</a>
			<a className="pdf-btn btn btn-default" role="button">꽉</a>
		</div>
	)
}

  render() {
  	if(!this.state.pdf_load)
  		return (<div></div>);
  		
    return (<div className="pdf-wrapper">
    {this.renderButtons()}
    	<div className="pdf-page-wrapper">
    	{[1,2].map(page => (
    		<Page pageNum={page} key={page} pdfjs={this.pdfjs}/>
    	))}
    	</div>
    	<PDFComments />
    </div>
     
    )
  }
  
  
}


const mapStateToProps = state => {
	return {state: state.PDFView}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewer)
