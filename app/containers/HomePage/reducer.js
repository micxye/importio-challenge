import { ADD_ITEM } from './constants';

export const initialState = {
  items: [{
    id: 0,
    name: 'bro',
    qty: 0,
    price: 0,
    total: 0,
  }],
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    default:
      return state;
  }
}

export default homeReducer;
