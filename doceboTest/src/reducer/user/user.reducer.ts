import {DoceboAppAction} from 'action/types';
import {
    FETCH_USER,
    FETCH_USER_FAILURE,
    FETCH_USER_SUCCESS, UserActionPayload,
} from 'action/user/user.action';
import {GitHubUserInfo} from 'model/gitApi.model';

export interface UserState {
    user?: GitHubUserInfo;
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
                user: action.payload.userInfo,
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
            };
        default:
            return {...state};
    }
};
