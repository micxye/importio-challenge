import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { changeName, changeQty, changePrice } from './actions';
import RowWrapper from './RowWrapper';
import ItemInput from './ItemInput';
import QtyInput from './QtyInput';
import DollaSign from './DollaSign';
import PriceInput from './PriceInput';
import TotalPrice from './TotalPrice';
import DeleteItemButton from './DeleteItemButton';
import {
  makeSelectItems
} from './selectors';

class Item extends React.PureComponent{
  render() {
    const { items, index, onChangeName, onChangeQty, onChangePrice } = this.props;
    return (
      <RowWrapper>
        <ItemInput 
          value={items[index].name} 
          onChange={e => onChangeName(e, index)} 
          placeholder="Enter Item Name"
        />
        <QtyInput 
          type="number" 
          value={items[index].qty}
          onChange={e => onChangeQty(e, index)} 
        />
        <DollaSign>$
          <PriceInput 
            type="number" 
            onChange={e => onChangePrice(e, index)}
            value={items[index].price}
          />
        </DollaSign>
        <TotalPrice></TotalPrice>
        <DeleteItemButton>x</DeleteItemButton>
      </RowWrapper>
    )
  }
}

Item.propTypes = {
  onChangeName: PropTypes.func,
  onChangeQty: PropTypes.func,
  onChangePrice: PropTypes.func,
  items: PropTypes.array,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeName: (e, index) => {
      dispatch(changeName(index, e.target.value))
    },
    onChangeQty: (e, index) => {
      dispatch(changeQty(index, e.target.value))
    },
    onChangePrice: (e, index) => {
      dispatch(changePrice(index, e.target.value))
    },
  };
}

const mapStateToProps = createStructuredSelector({
  items: makeSelectItems(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Item);
