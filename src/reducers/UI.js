import {DRAWER_OPEN, DRAWER_CLOSE} from '../actions/constants';

const initialState = {
    drawer: {
        open: false,
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DRAWER_OPEN:
            return {
                ...state,
                drawer: {
                    ...state.drawer,
                    open: true,
                }
            };
        case DRAWER_CLOSE:
            return {
                ...state,
                drawer: {
                    ...state.drawer,
                    open: false,
                }
            };
        default:
            return state;
    }
}
