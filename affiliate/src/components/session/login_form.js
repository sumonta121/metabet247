import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../nav/navbar_container'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser === true) {
  //     this.props.history.push('/tweets');
  //   }

  //   // Set or clear errors
  //   this.setState({errors: nextProps.errors})
  // }

  componentWillMount(){
    this.props.resetSessionErrors();
    
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li className="login-error-messages" key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-page">
        <NavbarContainer />
          <div className="form-container" >
          <form className="form-container-login" onSubmit={this.handleSubmit}>
            <div className="form-container-login-2">
                <h1 className="login-header">
                 <img style={{ maxHeight:'70px' }} src='https://metabet247.com/images/1699873787636.png' />
                </h1>
                <div>Email</div>
                <input type="text"
                  className="login-form-fields"
                  value={this.state.email}  style={{color:'black'}}
                  placeholder='Enter your Email Address'
                  onChange={this.update('email')}
                />
              <br/>
                <div>Password</div>
                <input type="password"
                  className="login-form-fields" style={{color:'black'}}
                  value={this.state.password}
                  placeholder='Enter your password'
                  onChange={this.update('password')}
                />
              <br/>
              {this.renderErrors()}
              <input className="btn btn-primary btn-block" type="submit" value="Unlock" />
              {/* <div className="login-container-message">
                <div className="login-message">Don't have an account?</div>
                <Link className="login-page-signup-btn" to={'/signup'}>Sign Up</Link>
              </div> */}
              <div className="line"></div>
              <div className="warning-text">
                  Forgot your password?
              </div>
              <div className="warning-text">
                  META BET 247
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);