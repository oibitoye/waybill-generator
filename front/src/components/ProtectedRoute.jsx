import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
//   console.log('ProtectedRoute component rendered'); // Add console.log here
//   console.log(isAuthenticated)

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
            <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
