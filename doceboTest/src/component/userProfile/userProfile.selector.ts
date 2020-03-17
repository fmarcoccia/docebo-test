import {createSelector} from 'reselect';
import {AppDoceboStore} from 'store/types';
import {GitHubUserInfo} from 'model/gitApi.model';

const getUser = (state: AppDoceboStore) => {
    if(state.userReducer.user) {
        return state.userReducer.user
    }
    throw 'doesn\'t exist user in store';
};

export const getUserSelector = createSelector(
    [getUser],
    (user: GitHubUserInfo) => {
        return user
    },
);
