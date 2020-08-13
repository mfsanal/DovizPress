import {
    GET_ALL_DOVIZ_REQUEST,
    GET_ALL_DOVIZ_SUCCESS,
    GET_ALL_DOVIZ_FAILURE
} from "store/constants";
import axios from "axios";
import {APP_URL} from "utils";

export const getAllDoviz = (type, day) => async dispatch => {
    try {

        dispatch({
            type: GET_ALL_DOVIZ_REQUEST
        });

        const res = await axios.get(APP_URL + '?Type=' + type + '&Day=' + day);

        dispatch({
            type: GET_ALL_DOVIZ_SUCCESS,
            payload: res.data
        });

    } catch (err) {

        dispatch({
            type: GET_ALL_DOVIZ_FAILURE,
            payload: err.response?.data?.message
        });

    }
};