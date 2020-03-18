import {AppDoceboStore} from 'store/types';
import {Dispatch} from 'react';
import {connect} from 'react-redux';
import SearchUserComponent from './searchUser.component';
import {getUsersSelector, getUsersTotalNumberSelector} from './searchUser.selector';
import {fetchUsers} from 'action/users/users.action';
import {IRequestGetUsers} from 'model/gitApi.model';
import {aboutUser} from 'action/user/user.action';

const mapStateToProps = (state: AppDoceboStore) => ({
  users: getUsersSelector(state),
  totalNumber: getUsersTotalNumberSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getUsers: (input: IRequestGetUsers) => dispatch(fetchUsers(input)),
  aboutUser: (navigation: any, username: string) => dispatch(aboutUser(navigation,username))
});

const SearchUserContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchUserComponent);

export default SearchUserContainer;
