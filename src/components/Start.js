import React from 'react';
import Search from './Search';
import Images from './Images';
import Loading from 'react-loading-spinner';
// Loading Icon function imported from react after a npm install.
import 'react-loading-spinner/src/css/index.css';
// Component for bundle Search and Image componets
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
  // Codeblock handling loading spinner function.
  defaultLoadingHandler = () => {
    this.setState({
      defaultLoading: true
    });

      setTimeout( () => {
      this.setState({
        defaultLoading: false,
        defaultLoadingContent: 'Content loaded!'
      })
    }, 1000);
  
  }
  render(){
    return (
      <div>
          <Search _getPhotos={this.handleFetchPhotos} loading={this.defaultLoadingHandler}/>
          <Loading isLoading={this.state.defaultLoading} loadingClassName='defloading'>
            <Images data={this.state.photos}/>
          </Loading>
      </div>
    )
  }
};

export default Start;