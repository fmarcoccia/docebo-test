import {AppDoceboStore} from 'store/types';
import {Dispatch} from 'react';
import {connect} from 'react-redux';
import UserComponent from "./userProfile.component";
import {getUserSelector} from "./userProfile.selector";

const mapStateToProps = (state: AppDoceboStore) => ({
    user: getUserSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({

});

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserComponent);

export default UserContainer;
