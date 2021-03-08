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


const Main = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <div className='main_wapper'>
                <div className={`main_container`}>
                    <Header />
                    <SideBar />
                    <div className="page-wrapper ">
                        <div className="container-fluid main_content">
                            {/* <SideBar /> */}
                            {/* <div className='monitoring detect_content'>
                            <div className='detect_content__left monitoring__camera w-100'> */}
                            <Suspense fallback={<StaticLoading />}>
                                <Switch >
                                    {MAIN.map((data, idx) => (
                                        <Route exact key={idx} path={data.path}>
                                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                                {/* <Breadcrumb dataBreadcrumb={{ title: data.title, path: data.path, isChangeTitle: data.isChangeTitle }} /> */}
                                                <data.component />
                                            </Animated>
                                        </Route>
                                    ))}
                                    <Route component={Error404} />
                                </Switch>
                            </Suspense>
                            {/* </div>
                        </div> */}
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </I18nextProvider >
    )
}

export default withTranslation()(Main);