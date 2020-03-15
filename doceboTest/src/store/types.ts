import {LoadingState} from 'reducer/loading/loading.reducer';
import {UsersState} from 'reducer/users/users.reducer';

export interface AppDoceboStore {
  loadingReducer: LoadingState;
  usersReducer: UsersState;
}
