import React, { Component } from 'react'
import { Link } from 'react-router'

/*
	
	propTypes: {
    to: oneOfType([string, object]),
    query: object,
    hash: string,
    state: object,
    activeStyle: object,
    activeClassName: string,
    onlyActiveOnIndex: bool.isRequired,
    onClick: func,
    target: string
  },
  
  
*/
export default class Go extends Component  {

link = "";
constructor(to) {
	super(to);
	this.link = new Link({to:to});
}

go = (e) => {
	this.link.handleClick(e);
}

  
  
}