import React from 'react';  
import DisplayButton from './DisplayButton';
import './css/search.css';
// Component for handling search function for Flickr photos
class Search extends React.Component{
  // Rest of the Api codeblock call.
  // Function using fetch method
  handleSubmit(e){
    e.preventDefault();
    this.props.loading();
    let apiKey = 'cbbd48e2830e6787ff24a776d11985ba';
    let searchTerm = this.refs.photoKeyword.value;
    this.refs.photoKeyword.value = '';

    let url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchTerm}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if(data.stat === 'fail') {
          return console.log(data.stat);
        }
        else {
          this.props._getPhotos(data.photos.photo);
        }
      })
      .catch(error => {
        throw error;
      });
  }
  // Function for toggling button on/off for photo titles
  toggleButton() {
    

  }
  render(){
    return (
      <div className="search-container">
        <div className="search-field-container">
          <h2 className="title">Search photos from Flickr!</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" 
              className="searchInput"
              placeholder="Type in a search term" 
              ref="photoKeyword"
              required
              autoFocus />
            <button 
              type="submit" 
              ref="button"
              className="searchButton">Search photos</button>
          </form>
          <div className="search-field-button">
            <p>Display photo title</p>
            <DisplayButton toggleButton={this.toggleButton}/>
          </div>
         
        </div>
      </div>
    )
  }
};

export default Search;
