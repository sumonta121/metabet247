import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Auth = ({ component: Component, path, exact, loggedIn }) => {

  const token = localStorage.getItem('jwtToken');
  const decodedToken = token ? jwt_decode(token) : null;

  const userRole = decodedToken ? decodedToken.role_as : null;
  // const redirectPath1 = userRole === 1 ? '/admin' : '/login';
  let redirectPath1;
  if (userRole === 2 || userRole === 2.1 || userRole === 4) {
    redirectPath1 = '/agent';
  } else {
    localStorage.removeItem("jwtToken");
    localStorage.clear();
  }

   
  return (

    <Route
      path={path}
      exact={exact}
      render={(props) =>
        
        !loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectPath1} />
        )
      }
    />

    
  );
};


// Passed in from parent component or from mapStateToProps
const Autht = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (!loggedIn ? ( <Component {...props} /> ) : ( <Redirect to="/main" /> ))} />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        // Redirect to the login page if the user is already authenticated
        <Redirect to="/login" />
      )
    }
  />
);

// Use the isAuthenitcated slice of state to determine whether a user is logged in

const mapStateToProps = state => (
  {loggedIn: state.session.isAuthenticated}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));