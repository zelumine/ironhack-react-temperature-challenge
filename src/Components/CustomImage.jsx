import React, { Component } from 'react'

class CustomImage extends Component {
  state = {
    size: 33,
    url: "https://2.bp.blogspot.com/-CZKm4TRXE-A/VZDeU_IrbsI/AAAAAAAAHXs/J_eq0g8PFfc/s1600/Shape%2BSquare%2BClipart.png"
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Image url" id="url" name="url" onChange={this.handleChange} /> <br/>
        <input type="range" min="0" max="200" name="size" onChange={this.handleChange} /> <br/>
        <p>{this.state.size} x {this.state.size} px</p>
        <img src={this.state.url} width={this.state.size} alt="Customized img"/>
      </div>
    )
  }
}

export default CustomImage
