import * as _ from 'lodash';

import {DRAWER_CHANGE, ADD_DIALOG_CHANGE} from '../actions/constants';

const initialState = {
    drawer: {
        open: false,
    },
    addDialog: {
        open: false,
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DRAWER_CHANGE:
            return _.merge({}, state, {
                    drawer: {
                        open: action.open,
                    }
                }
            );

        case ADD_DIALOG_CHANGE:
            return _.merge({}, state, {
                    addDialog: {
                        open: action.open,
                    }
                }
            );
        default:
            return state;
    }
}
