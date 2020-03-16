import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppDoceboStore} from 'store/types';
import {DoceboAppAction} from 'action/types';
import gitServices from 'http-client/git.service';
import {GitHubUserInfo} from 'model/gitApi.model';
import {startLoading, stopLoading} from 'action/loading/loading.action';
import {Route} from "../../App";

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export interface UserActionPayload{
    userInfo: GitHubUserInfo
}

export const fetchUser = (navigation: any, username: string): ThunkAction<Promise<void>, AppDoceboStore, {}, DoceboAppAction<any>> => {
    return async (dispatch: ThunkDispatch<AppDoceboStore, {}, DoceboAppAction<any>>, getState: () => AppDoceboStore,) => {
        dispatch({
            type: FETCH_USER,
            payload: null,
        });
        dispatch(startLoading());
        try {
            const response = await gitServices.getUser(username);
            dispatch(dataUserSuccess({
                userInfo: response
            }));
            navigation.navigate(Route.PROFILE.name,{username: username});
        } catch (e) {
            dispatch(dataUserFailure());
        } finally {
            dispatch(stopLoading())
        }
    };
};

export const dataUserSuccess = (newState: UserActionPayload): DoceboAppAction<any> => ({
    type: FETCH_USER_SUCCESS,
    payload: newState,
    error: false,
});

export const dataUserFailure = (): DoceboAppAction<any> => ({
    type: FETCH_USER_FAILURE,
    payload: null,
    error: true,
});
