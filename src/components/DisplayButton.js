import React from 'react';
// Button component for displaying title on photos
class DisplayButton extends React.Component {

  constructor() {
    super();
    this.state = {
      isOn: false,
    };
  }
  // Function for button displaying photo title
  change() {
    this.setState({
      isOn: !this.state.isOn,

    });
    this.props.toggleButton();
    console.log('Testing');

    let display = (this.state.isOn) ? "block" : "none";
    let displayTitle = [...document.querySelectorAll('.photo-title')];

    displayTitle.map((i) => {
      return i.style.display = display;
    })
  }
  
  render() {
    // Color and text for button
    let text = (this.state.isOn) ? "OFF" : "ON";
    let color = (this.state.isOn) ? "gray" : "green";
    
    // Object containing css for display photo button
    let buttonStyle = {
      border: 'none',
      backgroundColor: color,
      fontSize: '15px',
      width: '80px',
      height: '40px',
      marginTop: '10px',
      borderStyle: 'solid',
      borderRadius: '5px'
    };

    return (
      <button 
        onClick={this.change.bind(this)}
        style={buttonStyle}
      >
        {text}
      </button>
  
    );
  }
}

export default DisplayButton;