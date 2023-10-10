import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth.context';
import Layout from '../components/layout';

type PrivateRouteProps = {
  children: React.ReactNode;
  [x: string]: unknown;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated ? <Layout>{children}</Layout> : <Redirect to="/login" exact />;
      }}
    />
  );
};

export default PrivateRoute;
