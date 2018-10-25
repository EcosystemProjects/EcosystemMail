import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from "redux-thunk";
import {createLogger} from 'redux-logger';
import rootReducer from "../reducers";

const initialState = {};

const middleware = [thunk];

const logger = createLogger({
    collapsed: true,
    diff: true
});

const store = createStore(
		rootReducer,
		initialState,
		composeWithDevTools(
            /* logger must be the last middleware in chain to log actions */
            applyMiddleware(...middleware, logger)  
        )
);

export default store;
