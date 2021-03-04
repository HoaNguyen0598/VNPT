import React, { Suspense } from 'react';
import { GUESTS } from '../routes';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import { Animated } from 'react-animated-css';
import { Error404 } from '../templates/ErrorPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLoginWrapper from 'components/common/MainLogin/MainLoginWrapper';

const GuestLayout = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <Suspense fallback={'<div>Loading</div>'}>
                <Switch >
                    {GUESTS.map((data, idx) => (
                        <Route exact key={idx} path={data.path}>
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                <MainLoginWrapper>
                                    <data.component />
                                </MainLoginWrapper>
                            </Animated>
                        </Route>
                    ))}
                    <Route component={Error404} />
                </Switch>
            </Suspense>
        </I18nextProvider >
    )
}

export default withTranslation()(GuestLayout);