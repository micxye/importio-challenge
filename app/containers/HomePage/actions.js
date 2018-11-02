import {
  ADD_ITEM,
  CHANGE_NAME,
  CHANGE_QTY,
  CHANGE_PRICE,
  DELETE_ITEM,
  CHANGE_TAX,
} from './constants';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item,
  };
}

export function changeName(index, name) {
  return {
    type: CHANGE_NAME,
    index,
    name,
  };
}

export function changeQty(index, qty) {
  return {
    type: CHANGE_QTY,
    index,
    qty,
  };
}

export function changePrice(index, price) {
  return {
    type: CHANGE_PRICE,
    index,
    price,
  };
}

export function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    index,
  }
}

export function changeTax(index, tax) {
  return {
    type: CHANGE_TAX,
    index,
    tax,
  };
}
