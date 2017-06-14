import React from 'react';
import Search from './Search';
import Images from './Images';

class Start extends React.Component{
    constructor(){
    super();
    this.state = {
      photos: []
    };
    this.handleFetchPhotos = this.handleFetchPhotos.bind(this);
  }

  handleFetchPhotos(photos){
    this.setState({'photos': photos});
  }
  render(){
    return (
      <div>
          <Search _getPhotos={this.handleFetchPhotos}/>
          <Images data={this.state.photos}/>
      </div>
    )
  }
};

export default Start;