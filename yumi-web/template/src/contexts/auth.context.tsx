import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as SDK from '@team_yumi/sdk';
import DEFAULT_PROFILE_IMAGE from '../assets/media/images/profile.svg';

SDK.setupModules({ stage: 'STAGING' });

type AuthProviderProps = {
  children: React.ReactNode;
};

type ProfileData = {
  title: string;
  name: string;
  avatar: string;
};

type AuthContextData = {
  user: SDK.Models.IAM.IJwtEntity | null;
  isAuthenticated: boolean;
  accessToken: string | null;
  handleLogin: () => Promise<void>;
  errorLogin?: boolean;
  profileData: ProfileData | undefined;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [booting, setBooting] = useState<boolean>(true);
  const [user, setUser] = useState<SDK.Models.IAM.IJwtEntity | null>(null);
  const [profileData, setProfileData] = useState<ProfileData>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [errorLogin] = useState<boolean>(false);
  const history = useHistory();

  const onBootHandler = async () => {
    setBooting(true);
    await Promise.all([SDK.Lib.IAM.boot(), SDK.Lib.Settings.boot()]);
    const isAuthenticated = SDK.Lib.IAM.isAuthenticated();
    setIsAuthenticated(isAuthenticated);
    setBooting(false);
  };

  const getUserInfo = () => {
    if (isAuthenticated) {
      const user = SDK.Lib.IAM.getUser().getInfo();
      const token = SDK.Lib.IAM.getUser().getToken();
      const profileData: ProfileData = {
        title: 'MR',
        name: user.unique_name,
        avatar: user.avatar || DEFAULT_PROFILE_IMAGE,
      };
      setUser(user);
      setAccessToken(token);
      setProfileData(profileData);
    } else {
      setUser(null);
    }
  };

  const handleLogin = async (): Promise<void> => {
    setIsAuthenticated(true);
    history.push('/');
  };

  const handleLogout = (): void => {
    setIsAuthenticated(false);
    history.push('/login');
  };

  useEffect(() => {
    getUserInfo();
  }, [isAuthenticated]);

  useEffect(() => {
    onBootHandler();
    SDK.Lib.EventStreamer.on(SDK.Lib.IAM.USER_SIGNOUT_EVENT, handleLogout);

    return () => {
      SDK.Lib.EventStreamer.off(SDK.Lib.IAM.USER_SIGNOUT_EVENT, handleLogout);
    };
  }, []);

  const contextValues: AuthContextData = {
    user,
    isAuthenticated,
    accessToken,
    handleLogin,
    errorLogin,
    profileData
  }

  return booting ? (
    <h1>Loading</h1>
  ) : (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
