import { News } from '../util';
import { FetchError } from '../action-creators';

export interface NewsState {
  news?: News;
  error?: FetchError;
  isLoading?: boolean;
}

export const newsDefaultState: NewsState = {
  news: undefined,
  error: undefined,
  isLoading: false,
};
