import React from 'react';
import styled from 'styled-components';

const TopRowWrapper = styled.div`
  width: 800px;
  display: flex;
  border-bottom: 1px dotted black;
  padding-bottom: 5px;
  padding-top: 5px;
  margin-bottom: 5px;
`;

const ItemColumn = styled.div`
  width: 342px;
  padding-left: 20px;
`;

const QtyColumn = styled.div`
  width: 78px;
  text-align: center;
`;

const PriceColumn = styled.div`
  width: 145px;
  text-align: center;
`;

const TotalColumn = styled.div`
  width: 215px;
  text-align: center;
`;

const TopRow = () => (
  <TopRowWrapper>
    <ItemColumn>Item</ItemColumn>
    <QtyColumn>Qty</QtyColumn>
    <PriceColumn>Price</PriceColumn>
    <TotalColumn>Total</TotalColumn>
  </TopRowWrapper>
)

export default TopRow;