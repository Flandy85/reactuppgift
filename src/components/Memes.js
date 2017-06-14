import React from 'react';
import './css/memes.css';

const Header = () => (
  <div className="meme-container">
  	<div className="meme-flex-container">
  		<h2 className="meme-title">Glourious Memes!</h2>
  		<h3 className="fun-title">Here is what you been looking for!</h3>
  		<img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fimages-cdn.9gag.com%2Fphoto%2FaYxzeeO_700b.jpg" alt="meme" className="meme-image" />
  		<img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fimages-cdn.9gag.com%2Fphoto%2FaVq6mZ8_700b.jpg" alt="meme" className="meme-image"/>
  		<img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fimages-cdn.9gag.com%2Fphoto%2Fabp7rq9_700b.jpg" alt="meme" className="meme-image"/>
      		
  	</div>

  </div>
);

export default Header;