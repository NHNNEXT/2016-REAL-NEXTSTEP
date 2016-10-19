import React, {  Component } from 'react'
import { Link } from 'react-router'
import Profile from '../components/Profile'
export default class Header extends Component {



  render() {
    return (
      <header id="header">
        <Link className="header-logo" to="/">LOGO</Link>
<Profile/>
      </header>
    )
  }
}
