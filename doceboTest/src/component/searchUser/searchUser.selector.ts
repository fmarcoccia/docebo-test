import {createSelector} from 'reselect';
import {AppDoceboStore} from 'store/types';
import {GitHubUser} from 'model/gitApi.model';

const getUsers = (state: AppDoceboStore) => state.usersReducer.users.items;
const totalNumber = (state: AppDoceboStore) => state.usersReducer.users.totalNumber;

export const getUsersSelector = createSelector(
  [getUsers],
  (users: GitHubUser[]) => {
    return users;
  },
);

export const getUsersTotalNumberSelector = createSelector(
    [totalNumber],
    (totalNumber: number) => {
        return totalNumber;
    },
);
