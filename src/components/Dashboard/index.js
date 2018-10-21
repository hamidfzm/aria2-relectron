import React, {Component, Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '../AppBar';
import List from '../List';
import AddButton from '../AddButton';


class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <AppBar/>
                <List/>
                <AddButton/>
            </Fragment>
        );
    }
}

export default Dashboard;
