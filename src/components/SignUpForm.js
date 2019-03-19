import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        username: '',
        email: '',
        agree: false
      },
      errors: {
        username: false,
        email: false,
        agree: false
      }
    }
  }

  inputTextHandler = (event) => {
    const {name} = event.target;
    this.setState({
      inputs: {
        ...this.state.inputs,
        [name]: event.target.value
      }
    })
  }

  agreeHandler = () => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        agree: !this.state.inputs.agree
      }
    })
  }

  usernameErrorHandler = () => {
    const isError = this.state.inputs.username === '' ? true : false;

    this.setState({
      errors: {
        ...this.state.errors,
        username: isError
      }
    })
  }

  emailErrorHandler = () => {
    const isError = this.state.inputs.email === '' ? true : false;
    
    this.setState({
      errors: {
        ...this.state.errors,
        email: isError
      }
    })
  }

  agreeErrorHandler = () => {
    const isError = this.state.inputs.agree === false ? true : false;
    
    this.setState({
      errors: {
        ...this.state.errors,
        agree: isError
      }
    })
  }

  signUp = () => {
    alert(JSON.stringify(this.state.inputs, null, 2))
  }

  render() {
    const {username, email, agree} = this.state.inputs;

    return (
      <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={username} onChange={this.inputTextHandler} />
          <br/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={this.inputTextHandler} />
          <br/>
          <input type="checkbox" checked={agree} onChange={this.agreeHandler} /> <span>I agree to the terms</span>
          <br/>
          <input type="submit" value="Sign Up" onClick={this.signUp} />
      </div>
    );
  }
}

export default SignUpForm;