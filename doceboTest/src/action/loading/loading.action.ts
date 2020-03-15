import {DoceboAppAction} from 'action/types';

export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const startLoading = (): DoceboAppAction<boolean> => ({
  type: START_LOADING,
  payload: true,
});

export const stopLoading = (): DoceboAppAction<boolean> => ({
  type: STOP_LOADING,
  payload: false,
});
