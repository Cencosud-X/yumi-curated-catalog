import { SIDEBAR_MENU_OPTIONS } from '../../constants';
import { useAuthContext } from '../../contexts/auth.context';
import { useHistory } from 'react-router-dom';
import * as SDK from '@team_yumi/sdk';
import LOGO from '../../assets/media/images/default-logo.svg'
import Ramen from '@team_yumi/ramen-web';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { profileData } = useAuthContext();
  const history = useHistory();

  const handleLogout = () => SDK.Lib.IAM.getUser().signOut();

  const redirect = (route: string) => history.push(route);

  return (
    <Ramen.XPage>
      <Ramen.XSidebar
        menu={SIDEBAR_MENU_OPTIONS}
        logo={LOGO}
        expandedLogo={LOGO}
        onActionClick={redirect}
      />
      <Ramen.XHeader profile={profileData!} onSignOutClick={handleLogout} />
      <Ramen.XBody>{children}</Ramen.XBody>
    </Ramen.XPage>
  );
};

export default Layout;
