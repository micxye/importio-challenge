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
  taxpercent: 5,
  taxtotal: 0,
  grandtotal: 0,
};

function homeReducer(state = initialState, action) {
  const items = state.items.slice();
  let subtotal;
  let taxpercent;
  let taxtotal;
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
      taxtotal = Number((subtotal * state.taxpercent / 100).toFixed(2));
      grandtotal = subtotal + taxtotal;
      return {
        ...state,
        items,
        subtotal,
        taxtotal,
        grandtotal,
      };
    case CHANGE_PRICE:
      items[action.index].price = Number(action.price);
      items[action.index].total = Number(Number(items[action.index].qty * items[action.index].price).toFixed(2));
      subtotal = items.reduce((sum, item) => sum + item.total, 0);
      taxtotal = Number((subtotal * state.taxpercent / 100).toFixed(2));
      grandtotal = subtotal + taxtotal;
      return {
        ...state,
        items,
        subtotal,
        taxtotal,
        grandtotal,
      };
    case CHANGE_TAX:
      if (action.tax.length > 4) {
        return state;
      }
      taxpercent = action.tax;
      subtotal = items.reduce((sum, item) => sum + item.total, 0);
      taxtotal = Number((subtotal * taxpercent / 100).toFixed(2));
      grandtotal = subtotal + taxtotal;
      return {
        ...state,
        taxpercent,
        subtotal,
        taxtotal,
        grandtotal,
      };
    case DELETE_ITEM:
      items.splice(action.index, 1);
      subtotal = items.reduce((sum, item) => sum + item.total, 0);
      taxtotal = Number((subtotal * state.taxpercent / 100).toFixed(2));
      grandtotal = subtotal + taxtotal;
      return {
        ...state,
        items,
        subtotal,
        taxtotal,
        grandtotal,
      };
    default:
      return state;
  }
}

export default homeReducer;
