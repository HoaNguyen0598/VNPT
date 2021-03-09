import React, { Suspense, useState } from 'react';
import { MAIN } from '../routes';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import { Animated } from 'react-animated-css';
import { Error404 } from '../templates/ErrorPage';
import { Switch, Route } from "react-router-dom";
import Footer from '../components/common/Main/Footer';
import { withTranslation } from 'react-i18next';
import Header from '../components/common/Main/Header';
import StaticLoading from 'components/common/Loading/StaticLoading';
import SideBar from 'components/common/Main/SideBar/Sidebar';
import Breadcrumb from 'components/common/Main/Breadcrumb';


const Main = () => {
    const [sidebar, setSidebar] = useState(false);

    const clickMenu = () => {
        setSidebar(!sidebar);
    }
    return (

        <I18nextProvider i18n={i18n}>
            <div className={`main_wapper ${sidebar ? 'sidebar-mini' : ''}`}>
                <div className={`main_container`}>
                    <Header handleMenu={clickMenu} />
                    <SideBar />
                    <div className="page-wrapper ">
                        <div className="container-fluid main_content">
                            <Suspense fallback={<StaticLoading />}>
                                <Switch >
                                    {MAIN.map((data, idx) => (
                                        <Route exact key={idx} path={data.path}>
                                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                                {data.isBreadcrumb && <Breadcrumb isDymamicBreadcrumb={data.isDymamicBreadcrumb} dataBreadcrumb={{ title: data.title, path: data.path }} />}
                                                <data.component />
                                            </Animated>
                                        </Route>
                                    ))}
                                    <Route component={Error404} />
                                </Switch>
                            </Suspense>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </I18nextProvider >
    )
}

export default withTranslation()(Main);