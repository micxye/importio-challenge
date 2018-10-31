import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectItems = () => createSelector(selectHome, homeState => homeState.get('items'));

export {
  selectHome,
  makeSelectItems,
};
