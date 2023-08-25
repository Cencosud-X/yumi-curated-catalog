import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
/* Yummi SDK and Ramen imports */
import * as SDK from '@team_yumi/sdk';
import Ramen from '@team_yumi/ramen-web';
/* Ramen Web styles imports */
import '@team_yumi/ramen-web/index.css';
import '@team_yumi/ramen-web/themes/fonts.css';
import '@team_yumi/ramen-web/themes/default.css';
/* Static Assets*/
import AvatarImage from './assets/avatar.png';
import SideBarLogoImage from './assets/sidebar-logo.png';
import ExpandedSideBarLogoImage from './assets/sidebar-logo-expanded.png';
/* Pages Imports */
import { HomePage } from './pages/home';
/* Components Imports */
import { IMenuItem } from '@team_yumi/ramen-web/components/web/xsidebar/root';
// YUMMI_IMPORT_INJECTION (DONT REMOVE THIS COMMENT)
// END_YUMMI_IMPORT_INJECTION (DONT REMOVE THIS COMMENT)

/**
 * Yummi SDK modules setup
 */
SDK.setupModules({stage: 'STAGING'});
/* Default Menu Items */
const menuItems = [
    {
        icon: 'home-outline',
        key: 'home',
        text: 'Inicio',
        type: 'action'
    },
    {
        text: 'Herramientas',
        type: 'divider'
    },
    {
        icon: 'list-outline',
        key: 'assign_task',
        text: 'Asignar tareas',
        type: 'action'
    },
    {
        icon: 'announcement-outline',
        key: 'mailing',
        text: 'Enviar comunicados',
        type: 'action'
    }
];

const App: React.FC = () => {
    const [booting, setBooting] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [menu, setMenu] = useState<IMenuItem[]>(menuItems);

    const onBootHandler = async () => {
        setBooting(true);
        // -------------------------------
        // Boot your app here
        await Promise.all([SDK.Lib.IAM.boot(), SDK.Lib.Settings.boot()]);
        // -------------------------------
        const isAuthenticated = SDK.Lib.IAM.isAuthenticated();
        setIsAuthenticated(isAuthenticated);
        setBooting(false);
    };

    const onAuthenticatedHandler = () => {
        setIsAuthenticated(true);
    };

    const onSignOutHandler = () => {
        window.location.reload();
    };

    useEffect(() => {
        onBootHandler();
        SDK.Lib.EventStreamer.on(SDK.Lib.IAM.USER_SIGNOUT_EVENT, onSignOutHandler);
        return () => SDK.Lib.EventStreamer.off(SDK.Lib.IAM.USER_SIGNOUT_EVENT, onSignOutHandler)
    }, []);

    if (booting) {
        return <Ramen.XPage/>;
    }

    /**
     * @ToDo Ramen login page implementation
     */
    if (!isAuthenticated) {
        return (
            <Ramen.XConfigProvider theme="arcus" country="cl">
                <Ramen.XApp>
                    <Ramen.XPage>
                        <Ramen.XText>
                            Login Page
                        </Ramen.XText>
                    </Ramen.XPage>
                </Ramen.XApp>
            </Ramen.XConfigProvider>
        );
    }

    return (
        <Ramen.XConfigProvider theme="arcus" country="cl">
            <Ramen.XApp>
                <Ramen.XPage>
                    <Ramen.XSidebar
                        expandedLogo={ExpandedSideBarLogoImage}
                        logo={SideBarLogoImage}
                        menu={menu}
                    />
                    <Ramen.XHeader
                        profile={{
                            title: 'Administrador',
                            name: 'Gabriela González',
                            avatar: AvatarImage
                        }}
                    />
                    <Ramen.XBody>
                        <Ramen.XBox horizontalAlign="center" verticalAlign="center" height="full">
                            <Router>
                                <Switch>
                                    <Route path="/" component={HomePage} exact={true}/>
                                    {/*YUMMI_ROUTE_INJECTION (DONT REMOVE THIS COMMENT)  */}
                                    {/*END_YUMMI_ROUTE_INJECTION (DONT REMOVE THIS COMMENT) */}
                                </Switch>
                            </Router>
                        </Ramen.XBox>
                    </Ramen.XBody>
                </Ramen.XPage>
            </Ramen.XApp>
        </Ramen.XConfigProvider>
    );
};

export default App;
