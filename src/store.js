import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';

// Sagas
import app from './reducers/sagas/app';

const sagaMiddleware = createSagaMiddleware();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
    
  }),
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  )

);

sagaMiddleware.run(app);

export default store;