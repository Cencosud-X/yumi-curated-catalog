import './styles.scss';
import { useAuthContext } from '../../contexts/auth.context';
import Ramen from '@team_yumi/ramen-web';
import Iam from '../../../../../libs/iam/src';

const Login: React.FC = () => {
  const { handleLogin } = useAuthContext();

  return (
    <Ramen.XPage>
      <Ramen.XBox height="full" width="full" orientation="horizontal">
        <div className="left"></div>
        <div className="right">
          <Iam.Login onAuthenticated={handleLogin} />
        </div>
      </Ramen.XBox>
    </Ramen.XPage>
  );
};

export default Login;
