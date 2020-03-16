import {DoceboAppAction} from 'action/types';
import {
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS, UsersActionPayload,
} from 'action/users/users.action';
import {GitHubUser} from 'model/gitApi.model';

export interface UsersState {
  users: {
    items: GitHubUser[],
    page: number,
    totalNumber: number
  };
}

const initialState: UsersState = {
  users: {
    items: [],
    page: 0,
    totalNumber: 0
  },
};

export const usersReducer = (state: UsersState = initialState, action: DoceboAppAction<UsersActionPayload>,): UsersState => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
      };
    case FETCH_USERS_SUCCESS:
      return {
       users: {...action.payload},
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
      };
    default:
      return {...state};
  }
};
