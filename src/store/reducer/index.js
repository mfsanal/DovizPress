import { combineReducers } from 'redux';
import DovizReducer from 'store/reducer/DovizReducer';

const appReducer = combineReducers({
    doviz: DovizReducer,
});

export default appReducer;
