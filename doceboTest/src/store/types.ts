import {LoadingState} from 'reducer/loading/loading.reducer';
import {UsersState} from 'reducer/users/users.reducer';
import {UserState} from 'reducer/user/user.reducer';

export interface AppDoceboStore {
  loadingReducer: LoadingState;
  usersReducer: UsersState;
  userReducer: UserState
}
