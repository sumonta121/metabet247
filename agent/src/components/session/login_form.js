import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../nav/navbar_container';
import { Link } from 'react-router-dom';

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

  componentWillMount() {
    this.props.resetSessionErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.email || !this.state.password) {
      this.setState({
        errors: {
          ...this.state.errors,
          form: "Email and password fields cannot be empty"
        }
      });
      return;
    }

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li className="login-error-messages" key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
        {this.state.errors.form && (
          <li className="login-error-messages">
            {this.state.errors.form}
          </li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div className="row">
        <NavbarContainer />
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form className="form-container-login" onSubmit={this.handleSubmit}>
            <div className="form-container-login-2">
              <h1 className="login-header">
                <img style={{ maxHeight: '70px' }} src='https://i.ibb.co/9yz8KsF/Maxbet.webp' alt="Logo" />
              </h1>
              <div>Email</div>
              <input
                type="text"
                className="login-form-fields"
                value={this.state.email}
                style={{ color: 'black' }}
                placeholder="Enter your User ID"
                onChange={this.update('email')}
              />
              <br />
              <div>Password</div>
              <input
                type="password"
                className="login-form-fields"
                value={this.state.password}
                style={{ color: 'black' }}
                placeholder="Enter your password"
                onChange={this.update('password')}
              />
              <br />
              {this.renderErrors()}
              <input className="btn btn-primary btn-block" type="submit" value="Unlock" />
              <div className="line"></div>
              <div className="warning-text">
                Forgot your password?
              </div>
              <div className="warning-text">
                MAXX BAT
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
