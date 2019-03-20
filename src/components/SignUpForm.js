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

  resetForm = () => {
    this.setState({
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
    })
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

  // Check inputs and if at least one of them is empty return FALSE
  checkErrorsHandler = () => {
    const {inputs} = this.state;
    let {usernameError, emailError, agreeAccepted} = false

    if (inputs.username === '') {
      usernameError = true;
    } else {
      usernameError = false;
    }

    if (inputs.email === '') {
      emailError = true;
    } else {
      emailError = false;
    }

    if (inputs.agree === false) {
      agreeAccepted = true;
    } else {
      agreeAccepted = false;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        username: usernameError,
        email: emailError,
        agree: agreeAccepted
      }
    })

    // If one of them is Empty check doesn't pass 
    return !(usernameError || emailError || agreeAccepted)
  }

  // Singing up without errors only
  signUpHandler = () => {
    if (this.checkErrorsHandler()) {
      this.resetForm()
      alert(JSON.stringify(this.state.inputs, null, 2))
    }
  }

  render() {
    const {inputs, errors} = this.state;

    return (
      <div>
        <UserName  
          username={inputs.username}
          inputTextHandler={this.inputTextHandler}
          error={errors.username}
        />
        <Email  
          email={inputs.email}
          inputTextHandler={this.inputTextHandler}
          error={errors.email}
        />
        <TermsAgree 
          agree={inputs.agree}
          agreeHandler={this.agreeHandler}
          error={errors.agree}
        />
        <Submit
          signUpHandler={this.signUpHandler}
        />
      </div>
    );
  }
}

export default SignUpForm;

function UserName({username, error, inputTextHandler}) {
  let errorMsg = (<span style={{color: "red"}}>{"Name is requred"}</span>);
  
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" value={username} onChange={inputTextHandler} />
      {error === true ? errorMsg : null}
    </div>
  )
}

function Email({email, error, inputTextHandler}) {
  let errorMsg = (<span style={{color: "red"}}>{"Email is requred"}</span>);

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={email} onChange={inputTextHandler} />
      {error === true ? errorMsg : null}
    </div>
  )
}

function TermsAgree({agree, agreeHandler, error}) {
  let errorMsg = (<span style={{color: "red"}}>{"Accept terms is requred"}</span>);

  return (
    <div>
    <input type="checkbox" checked={agree} onChange={agreeHandler} />
    <span>I agree to the terms</span>
    {error === true ? errorMsg : null}
    </div>
  )
}

function Submit({signUpHandler}) {
  return (
    <input type="submit" value="Sign Up" onClick={signUpHandler} />
  )
}