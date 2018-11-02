import {
  ADD_ITEM,
  CHANGE_NAME,
  CHANGE_QTY,
  CHANGE_PRICE,
  CHANGE_TAX,
} from './constants';

export const initialState = {
  items: [{
    name: 'bro',
    qty: 1,
    price: 0,
    total: 0,
  }],
  subtotal: 0,
  tax: 0.1,
  total: 0,
};

function homeReducer(state = initialState, action) {
  const updatedItems = state.items.slice();
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case CHANGE_NAME:
      updatedItems[action.index].name = action.name;
      return {
        ...state,
        items: updatedItems,
      };
    case CHANGE_QTY:
      updatedItems[action.index].qty = action.qty;
      return {
        ...state,
        items: updatedItems,
      };
    case CHANGE_PRICE:
      updatedItems[action.index].price = action.price;
      return {
        ...state,
        items: updatedItems,
      };
    default:
      return state;
  }
}

export default homeReducer;
