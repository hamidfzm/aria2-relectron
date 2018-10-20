import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Dashboard from './components/Dashboard';

const theme = createMuiTheme();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Dashboard/>
            </MuiThemeProvider>
        );
    }
}

export default App;
