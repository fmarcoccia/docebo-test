import {combineReducers} from 'redux';
import {loadingReducer} from 'reducer/loading/loading.reducer';

const rootReducer = combineReducers({
  loadingReducer: loadingReducer,
});
export default rootReducer;
