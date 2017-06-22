import React from 'react';
import {NavLink} from 'react-router-dom'; // Importing NavLink to be able to use hover and active classes.
import './css/header.css';
// Header component that handles navigation
class Header extends React.Component{
  render(){

        return (
      <header className="header">
        <div className="header-container">
            <h1>{this.props.title}</h1> 
            <h2>{this.props.secondTitle}</h2>
        </div>
        <div className="header-container2">
        	<nav>
        		<ul className="main-nav">
        			<li><NavLink exact to="/" style={{textDecoration: 'none'}} className="menu-start">Start</NavLink></li> 
        			<li><NavLink to="/about" style={{textDecoration: 'none'}} className="menu-about">About</NavLink></li>
        			<li><NavLink to="/memes" style={{textDecoration: 'none'}} className="menu-memes">Memes</NavLink></li>
        		</ul>
        	</nav>
        </div>
    </header>
    )
  }
};

export default Header;
