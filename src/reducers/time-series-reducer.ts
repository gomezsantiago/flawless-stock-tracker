import { Reducer } from 'redux';

import { TimeSeriesAction, TIME_SERIES_ACTIONS_TYPES } from '../actions';
import {
  TimeSeriesState,
  timeSeriesDefaultState,
} from '../states/time-series-state';

export const timeSeriesReducer: Reducer<TimeSeriesState, TimeSeriesAction> = (
  state: TimeSeriesState = timeSeriesDefaultState,
  { type, payload, error, key }: TimeSeriesAction
): TimeSeriesState => {
  const { resolve, reject, get } = TIME_SERIES_ACTIONS_TYPES;
  switch (type) {
    case resolve:
      return { ...state, [`${key}`]: payload, isLoading: false };
    case reject:
      return { ...state, error: error, isLoading: false };
    case get:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
