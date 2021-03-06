import { connect } from 'react-redux';

import { Header } from './header';
import { ApplicationState } from '../../states';
import { quoteActions, favoritesActions } from '../../actions';
import { headerSelector } from './headerSelector';
import { TD } from '../../util';

const mapStateToProps = ({ overviewState, quoteState }: ApplicationState) =>
  headerSelector(overviewState.payload, quoteState.payload);

const mapDispatchToProps = (dispatch: TD) => ({
  getFavorites: () =>
    dispatch(favoritesActions.getData('fb,aapl,amzn,ko,nflx')),
  getLatestUpdate: (symbol: string) => dispatch(quoteActions.getData(symbol)),
});

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
