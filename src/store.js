import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)) 
));


//? residual redux 

// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";
// const initialState = {};
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
// rootReducer,
// initialState,
// composeEnhancer(applyMiddleware(thunk))
// );
// export default store;