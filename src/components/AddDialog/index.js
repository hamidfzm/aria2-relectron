import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddDialog extends PureComponent {
    render() {
        const {open, handleClose} = this.props;

        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Add Download</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter your download URI to add to queue or start it.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Download Address"
                        type="url"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <MuiButton onClick={handleClose} color="primary">
                        Cancel
                    </MuiButton>
                    <MuiButton onClick={handleClose} color="primary">
                        Add
                    </MuiButton>
                    <MuiButton onClick={handleClose} color="primary">
                        Add & Start
                    </MuiButton>
                </DialogActions>
            </Dialog>
        );
    }
}

AddDialog.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
};

export default AddDialog;