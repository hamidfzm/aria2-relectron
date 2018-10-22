import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AddButtonComponent from '../../components/AddButton';
import AddDialogComponent from '../../components/AddDialog';
import {openAddDialog, closeAddDialog} from '../../actions/uiActions';

class AddButton extends Component {
    render() {
        const {open, actions} = this.props;

        return (
            <Fragment>
                <AddDialogComponent open={open} handleClose={actions.closeAddDialog}/>
                <AddButtonComponent handleClick={actions.openAddDialog}/>
            </Fragment>
        );
    }
}

AddButton.propTypes = {
    open: PropTypes.node.isRequired,
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const {UI: {addDialog: {open}}} = state;
    return {open}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
                openAddDialog,
                closeAddDialog,
            },
            dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);