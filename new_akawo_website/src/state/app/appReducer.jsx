import {
    HIDE_MODAL,
    SHOW_MODAL,
    HIDE_SUCCESS_MODAL,
    SHOW_SUCCESS_MODAL,
} from './appType';

const initialState = {
    isModalVisible: {
        status: false,
        error: false,
        success: false,
    },
    isSubmitSuccessful: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                isModalVisible: {
                    status: true,
                }
            };
        case HIDE_MODAL:
            return {
                ...state,
                isModalVisible: {
                    status: false,
                }
            };
        case SHOW_SUCCESS_MODAL:
            return{
                ...state,
                isSubmitSuccessful: true
            }
        case HIDE_SUCCESS_MODAL:
            return {
                ...state,
                isSubmitSuccessful: false
            }
        default:
            return state;
    }
}

export default appReducer;