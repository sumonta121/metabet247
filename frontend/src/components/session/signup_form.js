import React from 'react';
import { withRouter } from 'react-router-dom';
//import NavbarContainer from '../nav/navbar_container'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../session/login_style.css';
import PhoneNumberSearch from './phone-number-search/PhoneNumberSearch';
import axios from 'axios';
import LoadingSpinner from "../frontend/user/include/LoadingSpinner";
import Nav from "../frontend/include/nav";



class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      mobile: '',
      handle: '',
      country: '',
      f_name: '',
      l_name: '',
      currency: '',
      password: '',
      password2: '',
      promocode: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.clearedErrors = false;

    this.state = {
      countries: [],     
      showModal: false, 
      userid: '',       
      password: '',
      isButtonDisabled: false,      
    };
   
    this.handleMobileChange = this.handleMobileChange.bind(this);
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

    // country list 

      axios.get('/api/commonData/country_list')
      .then(response => {
        this.setState({ countries: response.data });
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
      });
    
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
      // toast.error(errorMessages.join('\n'), {
      //   position: toast.POSITION.TOP_RIGHT,
      //   autoClose: 3000,
      // });
    }
  }
   
  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }
    this.setState({errors: nextProps.errors})
  }

    
  update(field) {
    return e => {
      if (field === 'mobile') {
        // Combine the country code and the phone number
        const fullPhoneNumber = `+${this.state.countryCode}${e.currentTarget.value}`;
        this.setState({
          mobile: fullPhoneNumber,
        });
      } else {
        this.setState({
          [field]: e.currentTarget.value,
        });
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      mobile: this.state.mobile,
      country: this.state.country,
      currency: this.state.currency,
      password: this.state.password,
      password2: this.state.password2,
      promocode: this.state.promocode
    };

    //this.props.signup(user, this.props.history);   
    axios
    .post('/api/users/register', user)
    .then(response => {
      if (response.data.success) {
        // Registration and login successful
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('jwtToken', response.data.jwtToken);

        // Show success toast
        toast.success('Registration successful', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            zIndex: 9999999999999, // Set the desired z-index value
          },
        });
        window.location.reload();
        // Redirect the user or perform any other necessary actions
      //  this.props.history.push('/user');
      } else {
        // Registration or login failed
        toast.error(response.data.error, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            zIndex: 99999999999, // Set the desired z-index value
          },
        });
      }
    })
    .catch(error => {
      if (error.response.data.mobile) {
        // Show error toast for password mismatch
        toast.error(error.response.data.mobile, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            zIndex: 99999999999, // Set the desired z-index value
          },
        });
      } else if (error.response.data.password) {
        // Show error toast for password mismatch
        toast.error(error.response.data.password, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            zIndex: 99999999999, // Set the desired z-index value
          },
        });
      } else {
        // Show error toast for other issues
        toast.error(error.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            zIndex: 99999999999, // Set the desired z-index value
          },
        });
      }
    });
  }
  handleSubmit2(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      country: this.state.country,
      currency: this.state.currency,
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      password: this.state.password,
      password2: this.state.password2,
      promocode: this.state.promocode
    };
  
    axios
      .post('/api/users/register', user)
      .then(response => {
        if (response.data.success) {
          // Registration and login successful
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('jwtToken', response.data.jwtToken);
  
          // Show success toast
          toast.success('Registration successful', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
              zIndex: 9999999999999, // Set the desired z-index value
            },
          });
          window.location.reload();
          // Redirect the user or perform any other necessary actions
        //  this.props.history.push('/user');
        } else {
          // Registration or login failed
          toast.error(response.data.error, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
              zIndex: 99999999999, // Set the desired z-index value
            },
          });
        }
      })
      .catch(error => {
        if (error.response.data.email) {
          // Show error toast for password mismatch
          toast.error(error.response.data.email, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
              zIndex: 99999999999, // Set the desired z-index value
            },
          });
        } else if (error.response.data.password) {
          // Show error toast for password mismatch
          toast.error(error.response.data.password, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
              zIndex: 99999999999, // Set the desired z-index value
            },
          });
        } else if (error.response.data.password2) {
          // Show error toast for password mismatch
          toast.error(error.response.data.password2, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
              zIndex: 99999999999, // Set the desired z-index value
            },
          });
        } else {
          // Show error toast for other issues
          toast.error(error.message, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
              zIndex: 99999999999, // Set the desired z-index value
            },
          });
        }
      });
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

  handleOneClickSignUp = () => {

    this.setState({ isButtonDisabled: true });

    const country = document.getElementById('country').value;
    const currency = document.getElementById('currency').value;
    const promocode = document.getElementById('promocode').value;
    const requestData = {
      country: country, 
      currency: currency, 
      promocode: promocode,     
    };

    // Make the API request using Axios
    axios.post('api/users/onclickregister', requestData)
      .then(response => {
        
        const { userid, password } = response.data;
       
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('jwtToken', response.data.jwtToken);
    
        this.setState({
          showModal: true,
          userid: userid,
          password: password,
          isButtonDisabled: false,
        });
      
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
       
      })
      .catch(error => {
        this.setState({ isButtonDisabled: false }); 
        if (error.response && error.response.data && error.response.data.error) {
          toast.error(error.response.data.error, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        } else {
          toast.error('An error occurred. Please try again.', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }

      });
  };

  handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.info('User ID & Password Copied to clipboard!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  handleMobileChange(phoneNumber) {
    this.setState({ mobile: phoneNumber });
  }

  render() {
    const { countries } = this.state;
    return (
      <div>
        <Nav />
          <div className="login_body">
             <ToastContainer pauseOnFocusLoss draggable pauseOnHover style={{ zIndex: 999999999 }}  />
                    
              {/* Modal */}
              {this.state.showModal && (
                <div className="modal-custom">
                   
                  <div className="modal-custom-content">
                    <h2>Successful Registration</h2>
                    <p className="warning">IMPORTANT! Please Save your User ID and password.</p>
                    <div className="login-details">
                      <p>User ID: {this.state.userid}</p>
                      <p>Password: {this.state.password}</p>
                    </div>
                    <div className="modal-custom-actions">
                      <button onClick={() => this.handleCopy(`ID: ${this.state.userid}\nPassword: ${this.state.password}`)}>Copy </button>
                      <a  
                        href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                          `ID: ${this.state.userid}\nPassword: ${this.state.password}`
                        )}`}
                        download="login-details.txt"
                      >
                        Download
                      </a>
                    </div>
                    <p className='footnote'>
                      We recommend that you fill in your profile data to have the possibility to restore access to the account in
                      case you forget your login or password.
                    </p>
                 
                     <button className='btn btn-primary' onClick={() => {  
                       this.props.history.push('/'); // Redirect to the home page
                       window.location.reload(); // Reload the page
                      }}>Close</button>
                     {/* <Link className='btn btn-primary' to={'/login'}>Sign In</Link> */}
                  </div>
                </div>
              )}
              
            <div className="col-md-4 col-sm-10 col-10 login-fornm">   
              <h3 align="center">Sign Up</h3>
                
                <ul className="nav nav-pills" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="pill" href="#home">One-Click</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href="#menu1">By Phone</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href="#menu2">By Email</a>
                  </li>
                </ul>
           
                <div className="tab-content">
                  <div id="home" className="container tab-pane active"><br />
                    <form>
                      <div className="input-container">
                        <select  className="input-field no-nice-select" id="country" required >
                          <option value="">Select Country</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                        <label for="country" className="input-label"></label>
                      </div>
                      <div className="input-container">
                        <select  className="input-field no-nice-select" id="currency" required  >
                          <option value="">Select Currency</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country.currency}>
                              {country.currency}
                            </option>
                          ))}
                        </select>
                        <label for="currency" className="input-label"></label>
                      </div>
                    
                      <div className="input-container">
                        <input type="text" className="input-field" id="promocode" required />
                        <label for="promocode" className="input-label">Enter Promo Code (Optional)</label>
                      </div>
                      
                      <div className="input-container" style={{ paddingBottom:'25px'}}>
                        <label for="promocode" className="input-label">
                        By clicking this button you confirm that you have read and agree to the <a className="link" href="/terms-and-conditions" target="_blank" rel="noreferrer"> Terms &amp; Conditions Policy </a>
                        </label>
                      </div>

                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={this.handleOneClickSignUp}
                          disabled={this.state.isButtonDisabled}
                        >
                          {this.state.isButtonDisabled ? <LoadingSpinner />: 'One Click Sign Up'}
                        </button>
                    

                        <p align="center">Already a member?   <Link to={'/login'}>Sign In</Link></p>
                      </div>
                    </form>
                  </div>
                  <div id="menu1" className="container tab-pane fade"><br />
                  <form className="form-container-signup" onSubmit={this.handleSubmit}>
                      <div className="input-container">
                        <select  className="input-field no-nice-select" id="country" onChange={this.update('country')} required >
                          <option value="">Select Country</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                        <label for="country" className="input-label"></label>
                      </div>  
                      <div className="input-container"> 
                        <select  className="input-field no-nice-select" id="currency" onChange={this.update('currency')} required >
                          <option value="">Select Currency</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country.currency}>
                              {country.currency}
                            </option>
                          ))}
                        </select>
                        <label for="currency" className="input-label"></label>
                      </div>
                      <div className="input-container">
                            <PhoneNumberSearch 
                              countryCode={this.state.countryCode} 
                              onPhoneNumberChange={this.handleMobileChange}
                            />

                      </div>
                             
                      <div className="input-container">
                        <input type="password" className="input-field" id="password"  onChange={this.update('password')} value={this.state.password} required />
                        <label for="password" className="input-label">Enter Password</label>
                      </div>
                      <div className="input-container">
                        <input type="password" className="input-field" id="password"  value={this.state.password2}
                  onChange={this.update('password2')} required />
                        <label for="password" className="input-label">Confirm Password</label>
                      </div>
                      <div className="input-container">
                        <input type="text" className="input-field" id="promocode" onChange={this.update('promocode')} value={this.state.promocode}  required />
                        <label for="promocode" className="input-label">Enter Promo Code (Optional)</label>
                      </div>
                          
                      <div className="input-container" style={{ paddingBottom:'25px'}}>
                        <label for="promocode" className="input-label">
                        By clicking this button you confirm that you have read and agree to the <a className="link" href="/terms-and-conditions" target="_blank" rel="noreferrer"> Terms &amp; Conditions Policy </a>
                        </label>
                      </div>

                      <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Sign Up </button>
                        <p align="center">Already a member?   <Link to={'/login'}>Sign In</Link></p>
                      </div>
                    </form>
                  </div>

                  <div id="menu2" className="container tab-pane fade"><br />
                  <form className="form-container-signup" onSubmit={this.handleSubmit2}>
                      <div className="input-container">
                        <select  className="input-field no-nice-select" id="country" onChange={this.update('country')} required >
                          <option value="">Select Country</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                        <label for="country" className="input-label"></label>
                      </div>  
                      <div className="input-container"> 
                        <select  className="input-field no-nice-select" id="currency" onChange={this.update('currency')} required >
                          <option value="">Select Currency</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country.currency}>
                              {country.currency}
                            </option>
                          ))}
                        </select>
                        <label for="currency" className="input-label"></label>
                      </div>

                      <div className="input-container">
                        <input type="email" className="input-field" id="Email"  value={this.state.email}
                  onChange={this.update('email')} required />
                        <label for="Email" className="input-label">Enter Email Address</label>
                      </div>
                      <div className="input-container">
                        <input type="text" className="input-field" onChange={this.update('f_name')} value={this.state.f_name}  id="text" required />
                        <label for="text" className="input-label">First Name</label>
                      </div>
                      <div className="input-container">
                        <input type="text" className="input-field" onChange={this.update('l_name')} value={this.state.l_name}  id="text" required />
                        <label for="text" className="input-label">Last Name</label>
                      </div>
                     
                      <div className="input-container">
                        <input type="password" className="input-field" id="password"  onChange={this.update('password')} value={this.state.password} required />
                        <label for="password" className="input-label">Enter Password</label>
                      </div>
                      <div className="input-container">
                        <input type="password" className="input-field" id="password"  value={this.state.password2}
                  onChange={this.update('password2')} required />
                        <label for="password" className="input-label">Confirm Password</label>
                      </div>
                      <div className="input-container">
                        <input type="text" className="input-field" id="promocode" onChange={this.update('promocode')} value={this.state.promocode}  required />
                        <label for="promocode" className="input-label">Enter Promo Code (Optional)</label>
                      </div>
                          
                      <div className="input-container" style={{ paddingBottom:'25px'}}>
                        <label for="promocode" className="input-label">
                        By clicking this button you confirm that you have read and agree to the <a className="link" href="/terms-and-conditions" target="_blank" rel="noreferrer"> Terms &amp; Conditions Policy </a>
                        </label>
                      </div>

                      <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Sign Up</button>
                        <p align="center">Already a member?   <Link to={'/login'}>Sign In</Link></p>
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

export default withRouter(SignupForm);