import {
    DRAWER_CHANGE,
    ADD_DIALOG_CHANGE,
} from './constants';

export function openDrawer() {
    return {
        type: DRAWER_CHANGE,
        open: true,
    };
}

export function closeDrawer() {
    return {
        type: DRAWER_CHANGE,
        open: false,
    };
}

export function openAddDialog() {
    return {
        type: ADD_DIALOG_CHANGE,
        open: true,
    };
}

export function closeAddDialog() {
    return {
        type: ADD_DIALOG_CHANGE,
        open: false,
    };
}