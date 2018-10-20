import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const styles = theme => ({
    button: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    }
});

class AddButton extends Component {
    render() {
        const {classes} = this.props;

        return (
            <MuiButton variant="fab" color="primary" aria-label="Add" className={classes.button}>
                <AddIcon/>
            </MuiButton>
        );
    }
}

AddButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);