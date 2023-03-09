// ** React Imports
import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, route }) => {
  if (route) {
    const user = localStorage.getItem('userData');
    const restrictedRoute = route.meta && route.meta.restricted;

    if (user && restrictedRoute) {
      return <Navigate to="/" />;
    }
  }

  return <Suspense fallback={null}>{children}</Suspense>;
};

export default PublicRoute;
