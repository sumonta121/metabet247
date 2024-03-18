import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../nav/navbar_container'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

  //Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  componentWillMount(){
    this.props.resetSessionErrors();
    this.props.clearBetErrors();
    
  }


  componentDidUpdate(prevProps) {
    if (prevProps.signedIn !== this.props.signedIn && this.props.signedIn) {
      // Show toast notification for successful registration
      toast.success('Login successful!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      // Redirect the user after successful registration (if needed)
      this.props.history.push('/');
    
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
     
      <div className="login-page" style={{marginLeft:'200px', marginRight:'200px'}}>
        <ToastContainer />
        <div className="form-container">
          <form className="form-container-login" onSubmit={this.handleSubmit}>
            <div className="form-container-login-2">
               
                <h1 className="login-header">Log In</h1>
                <div>Email</div>
                <input type="text"
                  className="login-form-fields"
                  value={this.state.email}  style={{color:'black'}}
                  onChange={this.update('email')}
                />
              <br/>
                <div>Password</div>
                <input type="password"
                  className="login-form-fields" style={{color:'black'}}
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              <br/>
              {this.renderErrors()}
              <input className="submit-btn" type="submit" value="Log In" />
              <div className="login-container-message">
                <div className="login-message">Don't have an account?</div>
                <Link className="login-page-signup-btn" to={'/signup'}>Sign Up</Link>
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

export default withRouter(LoginForm);