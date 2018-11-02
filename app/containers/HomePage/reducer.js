import {
  ADD_ITEM,
  CHANGE_NAME,
  CHANGE_QTY,
  CHANGE_PRICE,
  DELETE_ITEM,
  CHANGE_TAX,
} from './constants';

export const initialState = {
  items: [{
    name: '',
    qty: 1,
    price: 0,
    total: 0,
  }],
  subtotal: 0,
  tax: 0.1,
  grandtotal: 0,
};

function homeReducer(state = initialState, action) {
  const items = state.items.slice();
  let subtotal;
  let grandtotal;
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case CHANGE_NAME:
      items[action.index].name = action.name;
      return {
        ...state,
        items,
      };
    case CHANGE_QTY:
      items[action.index].qty = Number(action.qty).toFixed(0);
      items[action.index].total = Number(Number(items[action.index].qty * items[action.index].price).toFixed(2));
      subtotal = items.reduce((sum, item) => sum + item.total, 0);
      grandtotal = subtotal * state.tax;
      return {
        ...state,
        items,
        subtotal,
        grandtotal,
      };
    case CHANGE_PRICE:
      items[action.index].price = Number(action.price);
      items[action.index].total = Number(Number(items[action.index].qty * items[action.index].price).toFixed(2));
      subtotal = items.reduce((sum, item) => sum + item.total, 0);
      grandtotal = subtotal * state.tax;
      return {
        ...state,
        items,
        subtotal,
        grandtotal,
      };
    case DELETE_ITEM:
      items.splice(action.index, 1);
      subtotal = items.reduce((sum, item) => sum + item.total, 0);
      grandtotal = subtotal * state.tax;
      return {
        ...state,
        items,
        subtotal,
        grandtotal,
      };
    default:
      return state;
  }
}

export default homeReducer;
