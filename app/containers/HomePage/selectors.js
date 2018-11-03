import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectItems = () => createSelector(selectHome, homeState => homeState.items);

const makeSelectSubtotal = () => createSelector(selectHome, homeState => homeState.subtotal);

const makeSelectTaxpercent = () => createSelector(selectHome, homeState => homeState.taxpercent);

const makeSelectTaxtotal = () => createSelector(selectHome, homeState => homeState.taxtotal);

const makeSelectGrandtotal = () => createSelector(selectHome, homeState => homeState.grandtotal);

export {
  selectHome,
  makeSelectItems,
  makeSelectSubtotal,
  makeSelectTaxpercent,
  makeSelectTaxtotal,
  makeSelectGrandtotal,
};
