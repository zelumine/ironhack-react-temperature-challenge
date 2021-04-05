import React, { Component } from 'react';

export class Temperature extends Component {
  state = {
    temperature: 0
  }

  handleChange = (event) => {
    this.setState({temperature: event.target.value});
  }

  render() {
    let message, messageColor;
    if (this.state.temperature < 10) {
      message = "It's cold ❄️";
      messageColor = "blue";
    } else if (this.state.temperature > 30) {
      message = "It's warm ☀️";
      messageColor = "red";
    } else {
      message = "It's nice 💮";
      messageColor = "black";
    }


    return (
      <div>
        <input type="number" id="temp" name="temp" onChange={this.handleChange} />
        <p style={{color: messageColor}}>{message}</p>
      </div>
    )
  }
}

export default Temperature;
