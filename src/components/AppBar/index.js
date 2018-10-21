import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import MuiIconButton from '@material-ui/core/IconButton';
import MuiMenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // paddingTop: theme.spacing.unit * 1.1,
        '-webkit-app-region': 'drag'
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    }
});

class AppBar extends PureComponent {
    render() {
        const {classes, drawerOpen, handleDrawerOpen} = this.props;

        return (
            <MuiAppBar
                position="absolute"
                className={classNames(classes.appBar, drawerOpen && classes.appBarShift)}
            >
                <MuiToolbar disableGutters={!drawerOpen} className={classes.toolbar}>
                    <MuiIconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        className={classNames(
                            classes.menuButton,
                            drawerOpen && classes.menuButtonHidden,
                        )}
                    >
                        <MuiMenuIcon/>
                    </MuiIconButton>
                </MuiToolbar>
            </MuiAppBar>
        );
    }
}

AppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired,
    drawerOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(AppBar);
