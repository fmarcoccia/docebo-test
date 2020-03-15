import {combineReducers} from 'redux';
import {loadingReducer} from 'reducer/loading/loading.reducer';
import {usersReducer} from 'reducer/users/users.reducer';

const rootReducer = combineReducers({
  loadingReducer: loadingReducer,
  usersReducer: usersReducer,
});
export default rootReducer;
