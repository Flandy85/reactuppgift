import React from 'react';


class DisplayButton extends React.Component {

  constructor() {
    super();
    this.state = {
      isOn: false,
    };
  }

  change() {
    this.setState({
      isOn: !this.state.isOn,
    });
  }


  
  render() {

    let text = (this.state.isOn) ? "ON" : "OFF";
    let color = (this.state.isOn) ? "green" : "gray";

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