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
    constructor() {
        super();
        this.state = {
            uri: ''
        }
    }

    onChange(e) {
        this.setState({uri: e.target.value})
    }

    onAdd(start) {
        const {handleClose, handleAdd} = this.props;
        const {uri} = this.state;
        this.setState({uri: ''}, () => {
            handleAdd(uri, start);
            handleClose();
        });
    }

    onClose() {
        const {handleClose} = this.props;
        handleClose()
    }

    render() {
        const {open} = this.props;
        const {uri} = this.state;

        return (
            <Dialog
                open={open}
                onClose={() => this.onClose()}
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
                        onChange={(e) => this.onChange(e)}
                        value={uri}
                    />
                </DialogContent>
                <DialogActions>
                    <MuiButton onClick={() => this.onClose()} color="primary">
                        Cancel
                    </MuiButton>
                    <MuiButton onClick={() => this.onAdd(false)} color="primary">
                        Add
                    </MuiButton>
                    <MuiButton onClick={() => this.onAdd(true)} color="primary">
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
    handleAdd: PropTypes.func,
};

export default AddDialog;