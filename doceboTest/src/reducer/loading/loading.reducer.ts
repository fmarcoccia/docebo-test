import {DoceboAppAction} from 'action/types';
import {START_LOADING, STOP_LOADING} from 'action/loading/loading.action';

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

export const loadingReducer = (state: LoadingState = initialState, action: DoceboAppAction<boolean>): LoadingState => {
  switch (action.type) {
    case START_LOADING:
      return {
        isLoading: action.payload,
      };
    case STOP_LOADING:
      return {
        isLoading: action.payload,
      };
    default:
      return {...state};
  }
};
