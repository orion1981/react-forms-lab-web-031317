import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput(field, event){
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const { username, password } = this.state

    if ( !username || !password ) {
      return
    }


    this.props.onSubmit({
      username,
      password
    })
}

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleInput.bind(this, 'username')} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleInput.bind(this, 'password')} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
