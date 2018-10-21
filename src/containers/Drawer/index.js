import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MuiList from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import DrawerComponent from '../../components/Drawer';
import {closeDrawer} from '../../actions/uiActions';

class Drawer extends Component {
    render() {
        const {open, actions} = this.props;

        return (
            <DrawerComponent open={open} handleDrawerClose={actions.closeDrawer}>
                <MuiList>Downloads</MuiList>
                <Divider/>
                <MuiList>Downloading</MuiList>
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