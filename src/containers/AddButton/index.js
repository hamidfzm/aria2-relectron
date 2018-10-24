import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AddButtonComponent from '../../components/AddButton';
import AddDialogComponent from '../../components/AddDialog';
import {openAddDialog, closeAddDialog} from '../../actions/uiActions';
import {AddURI as AddURIAria2} from '../../aria2';

class AddButton extends Component {
    render() {
        const {open, actions} = this.props;

        return (
            <Fragment>
                <AddDialogComponent open={open}
                                    handleClose={actions.closeAddDialog}
                                    handleAdd={(uri, start) => {
                                        AddURIAria2(uri, {
                                            dir: 'tmp',
                                            pause: !start
                                        }).then((e) => console.log(e))
                                    }}/>
                <AddButtonComponent handleClick={actions.openAddDialog}/>
            </Fragment>
        );
    }
}

AddButton.propTypes = {
    open: PropTypes.bool.isRequired,
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