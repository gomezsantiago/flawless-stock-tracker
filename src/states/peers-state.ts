import { Peers, FetchError } from '../util';

export interface PeersState {
  payload: Peers | undefined;
  error: FetchError | undefined;
  isLoading?: boolean;
}

export const peersDefaultState: PeersState = {
  payload: undefined,
  error: undefined,
  isLoading: false,
};
