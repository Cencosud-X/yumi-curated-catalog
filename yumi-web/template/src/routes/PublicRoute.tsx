import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth.context';

type PublicRouteProps = {
  children: React.ReactNode;
  [x: string]: unknown;
};

const PublicRoute: React.FC<PublicRouteProps> = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated ? <Redirect to="/"/> : children;
      }}
    />
  );
};

export default PublicRoute;
