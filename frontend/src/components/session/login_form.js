import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../nav/navbar_container'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from "../frontend/user/include/LoadingSpinner";
import Nav from "../frontend/include/nav";
import '../session/login_style.css';

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

  
  componentDidMount() {
    // Add the 'has-content' class when input has value
    const inputFields = document.querySelectorAll('.input-field');
    inputFields.forEach((input) => {
      input.addEventListener('input', function () {
        if (input.value) {
          input.classList.add('has-content');
        } else {
          input.classList.remove('has-content');
        }
      });
    });    
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
      
      <div>
        <Nav />
          <div className="login_body">
             <ToastContainer    pauseOnFocusLoss draggable pauseOnHover style={{ zIndex: 99999999999 }}  />                  
            <div className="col-md-4 col-sm-10 col-10 login-fornm">   
              <h3 align="center">Sign In</h3>                            
           
                <div className="tab-content">
                  <div id="home" className="container tab-pane active"><br />
                  <form className="form-container-login" onSubmit={this.handleSubmit}>
                      <div className="input-container">
                        <input type="text"
                          className="input-field"
                          value={this.state.email} 
                          onChange={this.update('email')} required
                        />
                        <label for="promocode" className="input-label">Enter Email or User-ID or Phone</label>
                      </div>
                      <div className="input-container">
                      <input type="password"
                          className="input-field"
                          value={this.state.password}
                          onChange={this.update('password')} required
                        />
                        <label for="promocode" className="input-label">Enter Password</label>
                      </div>

                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          onClick={this.handleOneClickSignUp}
                          disabled={this.state.isButtonDisabled}
                        >
                          {this.state.isButtonDisabled ? <LoadingSpinner />: 'Sign In'}
                        </button>
                        <p align="center">Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>
                        <p align="center"><Link to={'#'}>Forgot your password? </Link></p>
                      </div>
                    </form>
                  </div>
                  

                 
                </div>
              </div>               
          </div>
        </div>    
    );
  }
}

export default withRouter(LoginForm);