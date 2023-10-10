import { AuthProvider } from '../contexts/auth.context';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import * as Pages from '../pages';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <PublicRoute path="/login" exact>
            <Pages.Login />
          </PublicRoute>
          <PrivateRoute path="/" exact>
            <Pages.Home />
          </PrivateRoute>
          <PrivateRoute path="/example" exact>
            <Pages.Example />
          </PrivateRoute>
          <Route path="*">
            <Redirect to="/login"/>
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Navigation;
