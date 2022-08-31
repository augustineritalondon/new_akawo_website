import {
    HIDE_MODAL,
    SHOW_MODAL,
    HIDE_SUCCESS_MODAL,
    SHOW_SUCCESS_MODAL
} from './appType';

export const SHOWMODAL = () => {
    return {
        type: SHOW_MODAL,
    };
}

export const HIDEMODAL = () => {
    return {
        type: HIDE_MODAL,
    };
}

export const SHOWSUCCESSMODAL = () => {
    return {
        type:  SHOW_SUCCESS_MODAL,
    };
}

export const HIDESUCCESSMODAL = () => {
    return {
        type: HIDE_SUCCESS_MODAL,
    };
}