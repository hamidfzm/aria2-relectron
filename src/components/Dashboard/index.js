import React, {Component, Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '../AppBar';

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <div>
                    <AppBar/>
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;
