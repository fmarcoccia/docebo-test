import {AppDoceboStore} from 'store/types';
import {Dispatch} from 'react';
import {connect} from 'react-redux';
import LoaderComponent from './loader.component';

const mapStateToProps = (state: AppDoceboStore) => ({
    isLoading: state.loadingReducer.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({

});

const SearchUserContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoaderComponent);

export default SearchUserContainer;
