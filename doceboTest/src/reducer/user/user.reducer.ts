import {DoceboAppAction} from 'action/types';
import {
    FETCH_USER,
    FETCH_USER_FAILURE, FETCH_USER_REPOS, FETCH_USER_REPOS_FAILURE, FETCH_USER_REPOS_SUCCESS,
    FETCH_USER_SUCCESS, UserActionPayload,
} from 'action/user/user.action';
import {GitHubUserInfo} from 'model/gitApi.model';

export interface UserState {
    user?: GitHubUserInfo;
    repos?: any
}

const initialState: UserState = {

};

export const userReducer = (state: UserState = initialState, action: DoceboAppAction<UserActionPayload>,): UserState => {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.userInfo,
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
            };
        case FETCH_USER_REPOS:
            return {
                ...state
            };
        case FETCH_USER_REPOS_SUCCESS:
            return{
                ...state,
                repos: action.payload.userRepo
            };
        case FETCH_USER_REPOS_FAILURE:
            return{
                ...state
            };
        default:
            return {...state};
    }
};
