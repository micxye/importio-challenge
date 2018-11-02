import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RowWrapper from './RowWrapper';
import ItemInput from './ItemInput';
import QtyInput from './QtyInput';
import DollaSign from './DollaSign';
import PriceInput from './PriceInput';
import TotalPrice from './TotalPrice';
import DeleteItemButton from './DeleteItemButton';

export default class Item extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <RowWrapper>
        <ItemInput text={this.props.item.name}/>
        <QtyInput type="number"/>
        <DollaSign>$<PriceInput type="number"/></DollaSign>
        <TotalPrice></TotalPrice>
        <DeleteItemButton>x</DeleteItemButton>
      </RowWrapper>
    )
  }
}


