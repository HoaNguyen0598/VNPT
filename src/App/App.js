//libs
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from '../store';
import MainPage from "./Main";
import MainLogin from "./MainLogin";
import GuestLayout from "./GuestLayout";
import { GUESTS, MAIN, getPathList } from "../routes";
import { TOKEN } from 'functions/Utils'
import MainLoginWrapper from 'components/common/MainLogin/MainLoginWrapper';
import { PAGES_URL } from 'contant';
import Login from 'templates/Login/Login';

const PrivateLoginRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        TOKEN === null
            // true
            ? <MainLogin />
            : <Redirect to='/' />
    )} />
)
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        //check nếu chưa login thì ko được vào mainPage
        <MainPage />
    )} />
)
const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={() => (
        <GuestLayout />
    )} />
)
const App = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Router>
                <Switch >
                    <Route path={PAGES_URL.login} render={() => <MainLoginWrapper>
                        <Login />
                    </MainLoginWrapper>} />
                    <Route exact path={getPathList(GUESTS)} >
                        <Route render={props => <PublicRoute {...props} />} />
                    </Route>
                    <Route exact path={getPathList(MAIN)} >
                        <Route render={props => <PrivateRoute {...props} />} />
                    </Route>
                    {/* <Route render={props => <PrivateRoute {...props} />} /> */}
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
