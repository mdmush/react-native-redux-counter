
import { AppRegistry, StatusBar } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './js/app';
import  { createStore } from 'redux';
import reducers from './js/reducers';

// StatusBar.setBarStyle('default');

const store = createStore(reducers);

const AppContainer = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

AppRegistry.registerComponent('RNReduxCounter', () => AppContainer);
