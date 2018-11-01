import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectItems = () => createSelector(selectHome, homeState => homeState.items);

// const makeSelectItem = id => createSelector(selectHome, homeState => homeState.items.filter(item => item.id === id)[0]);

export {
  selectHome,
  makeSelectItems,
};
