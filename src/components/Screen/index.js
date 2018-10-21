import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
    root: {
        display: 'flex',
    }
});

class Screen extends Component {
    render() {
        const {classes, children} = this.props;

        return (
            <Fragment>
                <div className={classes.root}>
                    <CssBaseline/>
                    {children}
                </div>
            </Fragment>
        );
    }
}

Screen.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Screen);