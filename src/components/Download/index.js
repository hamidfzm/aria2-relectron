import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiTypography from '@material-ui/core/Typography';
import MuiExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import MuiButton from '@material-ui/core/Button';
import MuiDivider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

class Download extends Component {
    render() {
        const {classes} = this.props;

        return (
            <MuiExpansionPanel>
                <MuiExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <MuiTypography className={classes.heading}>Expansion Panel 1</MuiTypography>

                </MuiExpansionPanelSummary>
                <MuiExpansionPanelDetails>
                    <MuiTypography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </MuiTypography>
                </MuiExpansionPanelDetails>
                <MuiDivider/>
                <MuiExpansionPanelActions>
                    <MuiButton size="small">Cancel</MuiButton>
                    <MuiButton size="small" color="primary">
                        Save
                    </MuiButton>
                </MuiExpansionPanelActions>
            </MuiExpansionPanel>
        );
    }
}

Download.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Download);