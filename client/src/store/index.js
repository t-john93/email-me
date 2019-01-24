//File initializes a new redux store

import { createStore, applyMiddleware, compose } from "redux";
import { responsiveStoreEnhancer } from "redux-responsive";
import reducers from "../reducers";
import reduxThunk from "redux-thunk";

//create redux store
const store = createStore(
    reducers,
    {},
    compose(responsiveStoreEnhancer, applyMiddleware(reduxThunk))
);

export default store;

