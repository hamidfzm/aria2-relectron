import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AppBarComponent from '../../components/AppBar';
import {openDrawer} from '../../actions/uiActions';

class AppBar extends Component {
    render() {
        const {open, actions} = this.props;

        return (
            <AppBarComponent drawerOpen={open} handleDrawerOpen={actions.openDrawer}/>
        );
    }
}

AppBar.propTypes = {
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
                openDrawer,
            },
            dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);