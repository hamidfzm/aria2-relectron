import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import Download from '../Download';

const styles = theme => ({
    container: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2
    },
});

class List extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.container}>
                <Download/>
                <Download/>
            </div>
        );
    }
}

List.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);