import React, { Component } from 'react';
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/';
import Page from "./components/Page";
import thunkMiddleware from 'redux-thunk';

// noinspection JSUnresolvedVariable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Page />
            </Provider>
        );
    }
}

export default App;
