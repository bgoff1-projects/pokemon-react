import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Page from "./components/Page";
import Parties from './components/Parties';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from './createStore';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

const { store, persistor } = createStore();


const App = () => (
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={ Page }/>
                    <Route path="/parties" component={ Parties }/>
                    <Redirect to="/"/>
                </Switch>
            </Router>
        </PersistGate>
    </Provider>
);

export default App;
