import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from 'store'
import {
    Router,
    Switch
} from 'react-router-dom';
import { DPRouter } from "context";
import { history } from 'utils';
import 'styles/index.scss';


const App = () => {
    return <Router history={history}>
        <Switch>
            <DPRouter />
        </Switch>
    </Router>;
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
