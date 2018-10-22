import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import Download from '../Download';

const styles = theme => ({});

class List extends Component {
    render() {
        return (
            <Fragment>
                <Download/>
                <Download/>
            </Fragment>
        );
    }
}

List.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);