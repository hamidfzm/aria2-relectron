import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';
import MuiDivider from '@material-ui/core/Divider';
import MuiIconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const drawerWidth = 240;

const styles = theme => ({
    list: {
        width: 250,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
});

class Drawer extends PureComponent {
    render() {
        const {classes, open, children, handleDrawerClose} = this.props;

        return (
            <MuiDrawer variant="permanent"
                       classes={{
                           paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
                       }}
                       open={open}>
                <div className={classes.toolbarIcon}>
                    <MuiIconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </MuiIconButton>
                </div>
                <MuiDivider/>
                {children}
            </MuiDrawer>
        );
    }
}

Drawer.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool,
    children: PropTypes.node.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(Drawer);
