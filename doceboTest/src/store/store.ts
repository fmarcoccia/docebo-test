import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from 'reducer/reducer';

const middleware: any[] = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
