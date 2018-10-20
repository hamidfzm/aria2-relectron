import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import Reducers from './reducers';
import Dashboard from './components/Dashboard';

const theme = createMuiTheme();


const store = createStore(Reducers,
    compose(
        applyMiddleware(thunk),
    )
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <Dashboard/>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
