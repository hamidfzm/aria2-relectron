import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MuiList from '@material-ui/core/List';
import MuiDivider from '@material-ui/core/Divider';
import DownloadingIcon from '@material-ui/icons/CloudDownload';
import DownloadQueue from '@material-ui/icons/CloudQueue';
import DownloadDone from '@material-ui/icons/CloudDone';
import Settings from '@material-ui/icons/Settings';

import DrawerComponent from '../../components/Drawer';
import DrawerItemComponent from '../../components/DrawerItem';
import {closeDrawer} from '../../actions/uiActions';

class Drawer extends Component {
    render() {
        const {open, actions} = this.props;

        return (
            <DrawerComponent open={open} handleDrawerClose={actions.closeDrawer}>
                <MuiList>
                    <DrawerItemComponent text={'Downloading'}>
                        <DownloadingIcon/>
                    </DrawerItemComponent>
                    <DrawerItemComponent text={'To Download'}>
                        <DownloadQueue/>
                    </DrawerItemComponent>
                    <DrawerItemComponent text={'Downloaded'}>
                        <DownloadDone/>
                    </DrawerItemComponent>
                </MuiList>
                <MuiDivider/>
                <MuiList>
                    <DrawerItemComponent text={'Settings'}>
                        <Settings/>
                    </DrawerItemComponent>
                </MuiList>
            </DrawerComponent>
        );
    }
}

Drawer.propTypes = {
    open: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const {UI: {drawer: {open}}} = state;
    return {open}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
                closeDrawer
            },
            dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);