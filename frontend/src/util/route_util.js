import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Passed in from parent component or from mapStateToProps
// const Auth = ({ component: Component, path, loggedIn, exact }) => (
//   <Route path={path} exact={exact} render={(props) => (
//     !loggedIn ? (
//       <Component {...props} />
//     ) : (
//         // Redirect to the tweets page if the user is authenticated
//       <Redirect to="/" />
//     )
//   )} />
// );

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  // You can check the value of 'loggedIn' here or perform any other logic you need

  const jwtToken = localStorage.getItem('jwtToken');
  if(jwtToken === null){
    loggedIn = false;   
    exact = false;   
  }
 
  // console.log('welcome');
  // console.log(Component);
  // console.log(loggedIn);
  // console.log(exact);
  // console.log(path);
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        // Check if jwtToken is not null and loggedIn is true
        !loggedIn ? (
          // Redirect to the home page if the user is authenticated
          <Component {...props} />
        ) : (
          // Render the component if the user is not authenticated
         
          <Redirect to="/" />
        )
      }
    />
  );
  
};




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