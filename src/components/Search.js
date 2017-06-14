import React from 'react';  
import DisplayButton from './DisplayButton';
import './css/search.css';
class Search extends React.Component{
  // fda49c8cb3942dab1d64780f08ed71fe
  handleSubmit(e){
    e.preventDefault();
    let apiKey = 'dd19ed51d6cdbcda479e49d09494285a';
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
            <DisplayButton />
          </div>
         
        </div>
      </div>
    )
  }
};

export default Search;
