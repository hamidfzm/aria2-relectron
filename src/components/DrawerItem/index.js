import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MuiListItem from '@material-ui/core/ListItem';
import MuiListItemIcon from '@material-ui/core/ListItemIcon';
import MuiListItemText from '@material-ui/core/ListItemText';

class DrawerItem extends PureComponent {
    render() {
        const {children, text} = this.props;
        return (
            <MuiListItem button>
                <MuiListItemIcon>
                    {children}
                </MuiListItemIcon>
                <MuiListItemText primary={text}/>
            </MuiListItem>
        );
    }
}

DrawerItem.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
};

export default DrawerItem;