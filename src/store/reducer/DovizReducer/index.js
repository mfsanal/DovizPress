import {
    GET_ALL_DOVIZ_REQUEST,
    GET_ALL_DOVIZ_SUCCESS,
    GET_ALL_DOVIZ_FAILURE
} from 'store/constants';

export const initialState = {
    data: null,
    isLoading: null,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DOVIZ_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case GET_ALL_DOVIZ_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: null
            };
        }

        case GET_ALL_DOVIZ_FAILURE:
            return {
                ...initialState,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
}