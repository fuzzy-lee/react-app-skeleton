import React, {Suspense, lazy} from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

import {Language} from "../components/Language";
import {Layout} from "../components/Layout";
import {Spin} from "antd";

import './App.scss';

const Home = lazy(() => import("../pages/Home"));
const Page1 = lazy(() => import("../pages/Page1"));
const Page2 = lazy(() => import("../pages/Page2"));
const NotFound = lazy(() => import("../pages/NotFound"));

const App = () => (
    <Language>
        <HashRouter>
            <Layout>
                <Suspense fallback={<Spin className="global-spin" delay={200} size="large"/>}>
                    <Switch>
                        <Redirect exact from="/" to="/home"/>
                        <Route path="/home" component={Home}/>
                        <Route path="/page1" component={Page1}/>
                        <Route path="/page2" component={Page2}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Suspense>
            </Layout>
        </HashRouter>
    </Language>
);


export default App;
