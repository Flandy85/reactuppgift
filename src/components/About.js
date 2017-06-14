import React from 'react';
import './css/About.css';

class About extends React.Component {
  
  render() {
    
    return (
      <div className="about-container">
      	<div className="about-placement-container">
      		<h2 className="about-title">About this awesome site!</h2>
      		<h3 className="fun-title">Fun for the whole family!</h3>
      		<p>This awesome site containes fun for the whole
      		family! Search photos from Flickr or read some good old
      		memes! Have fun! </p>

      		<h3 className="joke-title">Here! Have a joke</h3>
      		<p>My wife asked me why I carry a gun
      		in the house?
      		I looked at her and said: "Decepticons". She laughed,
      		I laughed, The toaster laughed, I shot the toaster, it 
      		was a good time! </p>
      		<img src="https://vectortoons.com/wp-content/uploads/2014/10/laughing-pop-up-toaster-emoji-102714.jpg" alt="toaster" className="img-toaster"/>
      		
      	</div>
        
          
      </div>
    );
  }
}

export default About;