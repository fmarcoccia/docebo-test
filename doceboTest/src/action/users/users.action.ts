import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppDoceboStore} from 'store/types';
import {DoceboAppAction} from 'action/types';
import gitServices from 'http-client/git.service';
import {GitHubUser, IRequestGetUsers} from "model/gitApi.model";
import {startLoading, stopLoading} from "action/loading/loading.action";

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_SUCCESS';

export interface UsersActionPayload{
  items: GitHubUser[],
  totalNumber: number,
  page: number
}

export const fetchUsers = (input: IRequestGetUsers): ThunkAction<Promise<void>, AppDoceboStore, {}, DoceboAppAction<any>> => {
  return async (dispatch: ThunkDispatch<AppDoceboStore, {}, DoceboAppAction<any>>, getState: () => AppDoceboStore,) => {
    dispatch({
      type: FETCH_USERS,
      payload: null,
    });
    dispatch(startLoading());
    try {
      const response = await gitServices.getUsers(input);
      dispatch(dataUsersSuccess({
        items: input.pageableRequest.page > 1 ? [...getState().usersReducer.users.items, ...response.items] : response.items,
        totalNumber: response.total_count,
        page: input.pageableRequest.page
      }));
    } catch (e) {
      dispatch(dataUsersFailure());
    } finally {
      dispatch(stopLoading())
    }
  };
};

export const dataUsersSuccess = (newState: UsersActionPayload): DoceboAppAction<any> => ({
  type: FETCH_USERS_SUCCESS,
  payload: newState,
  error: false,
});

export const dataUsersFailure = (): DoceboAppAction<any> => ({
  type: FETCH_USERS_SUCCESS,
  payload: null,
  error: true,
});
