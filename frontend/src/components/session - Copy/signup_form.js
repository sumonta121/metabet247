import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../nav/navbar_container'
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      mobile: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }
  

  componentDidUpdate(prevProps) {
    if (prevProps.signedIn !== this.props.signedIn && this.props.signedIn) {
      // Show toast notification for successful registration
      toast.success('Registration successful!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      // Redirect the user after successful registration (if needed)
      this.props.history.push('/login');
    }

    if (prevProps.errors !== this.props.errors && Object.keys(this.props.errors).length > 0) {
      // Show toast notification for errors
      const errorMessages = Object.values(this.props.errors);
      toast.error(errorMessages.join('\n'), {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  }

  
  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      mobile: this.state.mobile,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);   
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="login-error-messages" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
  
    return (
      <div className="sigup-page">
        {/* <NavbarContainer /> */}
        <div className="signup-form-container">
        <ToastContainer />
     
          <form className="form-container-signup" onSubmit={this.handleSubmit}>
            <div className="form-container-signup-2">
                <h1 className="signup-header">Sign Up</h1>
                <div>Email</div>
                <input type="email"
                className="signup-form-fields" style={{color:'black'}}
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              <br/>
              <div>Mobile</div>
                <input type="number"
                className="signup-form-fields" style={{color:'black'}}
                  value={this.state.mobile}
                  onChange={this.update('mobile')}
                />
              <br/>
                <div>Username</div>
                <input type="text"
                  className="signup-form-fields" style={{color:'black'}}
                  value={this.state.handle}
                  onChange={this.update('handle')}
                />
              <br/>
                <div>Password</div>
                <input type="password"
                  className="signup-form-fields" style={{color:'black'}}
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              <br/>
              <div>Confirm Password</div>
                <input type="password" style={{color:'black'}}
                  className="signup-form-fields"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                />
              <br/>
              {this.renderErrors()}
              <input className="submit-btn" type="submit" value="Sign Up" />
              <div className="signup-container-message">
                <div className="signup-message">Already have an account?</div>
                <Link className="signup-page-login-btn" to={'/login'}>Log In</Link>
              </div>
              <div className="line"></div>
              <div className="warning-text">
               XYZ GAME
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);