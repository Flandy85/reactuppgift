import React from 'react';
import './css/images.css';
class Images extends React.Component{

  constructor(){
    super();
    this.state = { mounted: false };
  }
  
  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {

    let photoStream;

    if(this.state.mounted){
      photoStream = this.props.data.map(function (photo) {
        if(photo){
          let id = photo.id;
          let source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

          let title = `${photo.title}`;

          return (
            <div className="imageBox" key={id}>
              <a href={source} target={source} className="image-size">
                <img src={source} alt={title} className="photo-image"/>
              </a> 
              <p className="photo-title">Title: {title}</p> 
            </div>
           
          );
        }
        return (null);
      });
    } 

    return (
      <div className="photo-body-container">
        <div id="photos-container">
          {photoStream}
        </div>
      </div>
      
    );
  }

};

export default Images;



