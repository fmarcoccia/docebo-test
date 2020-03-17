import {createSelector} from 'reselect';
import {AppDoceboStore} from 'store/types';
import {GitHubUserRepo} from 'model/gitApi.model';

const getUserRepos = (state: AppDoceboStore) => {
    if(state.userReducer.repos && state.userReducer.repos.length > 0) {
        return state.userReducer.repos
    }
    return []
};

export const getUserReposSelector = createSelector(
    [getUserRepos],
    (repos: GitHubUserRepo[]) => {
        return repos
    },
);
