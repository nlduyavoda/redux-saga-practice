import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import CartSaga from "./saga";
import rootReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(CartSaga);

export default store;
