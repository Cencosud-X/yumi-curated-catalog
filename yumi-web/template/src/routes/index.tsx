
import { AuthProvider } from '../contexts/auth.context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as Pages from '../pages';
import PrivateRoute from './PrivateRoute';

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" exact>
            <Pages.Login />
          </Route>
          <PrivateRoute path="/home" exact>
            <Pages.Home />
          </PrivateRoute>
          <PrivateRoute path="/example" exact>
            <Pages.Example />
          </PrivateRoute>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Navigation;
