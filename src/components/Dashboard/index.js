import React, {Component, Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '../AppBar';
import AddButton from '../AddButton';

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <div>
                    <AppBar/>
                    <AddButton/>
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;
