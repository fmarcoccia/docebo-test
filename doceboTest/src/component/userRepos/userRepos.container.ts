import {AppDoceboStore} from 'store/types';
import {Dispatch} from 'react';
import {connect} from 'react-redux';
import {getUserReposSelector} from './userRepos.selector';
import UserReposComponent from './userRepos.component';
import {OrderBy, SortBy} from 'http-client/git.service';
import {fetchUserRepos} from 'action/user/user.action';
import {getUserSelector} from 'component/userProfile/userProfile.selector';

const mapStateToProps = (state: AppDoceboStore) => ({
    userRepos: getUserReposSelector(state),
    username: getUserSelector(state).login
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    fetchRepo: (username: string, sortBy?: SortBy, orderBy?: OrderBy) =>
        dispatch(fetchUserRepos(username, sortBy, orderBy))
});

const UserReposContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserReposComponent);

export default UserReposContainer;
