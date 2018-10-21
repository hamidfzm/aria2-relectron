import {DRAWER_OPEN, DRAWER_CLOSE} from './constants';

export function openDrawer() {
    return {
        type: DRAWER_OPEN,
    };
}

export function closeDrawer() {
    return {
        type: DRAWER_CLOSE,
    };
}