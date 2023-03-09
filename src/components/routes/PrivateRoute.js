// ** React
import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, route }) => {
  const user = JSON.parse(localStorage.getItem('userData'));

  if (route) {
    let action = null;
    let resource = null;
    let restrictedRoute = false;

    if (route.meta) {
      action = route.meta.action;
      resource = route.meta.resource;
      restrictedRoute = route.meta.restrictedRoute;
    }

    if (!user) {
      return <Navigate to="/login" />;
    }
    if (user && restrictedRoute) {
      return <Navigate to="/" />;
    }
  }

  return <Suspense fallback={null}>{children}</Suspense>;
};

export default PrivateRoute;
