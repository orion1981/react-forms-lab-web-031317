import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: props.maxChars
    };
  }

  handleChange(){
    this.setState(function( previousState ){
      return {
        characters: --previousState.characters
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type='text' value="f" onChange={this.handleChange.bind(this)}/>
        <p>Characters remaining: {this.state.characters}</p>
      </div>
    );
  }
}
