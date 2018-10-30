import React from 'react';
import styled from 'styled-components';

const TopRowWrapper = styled.div`
  width: 800px;
  display: flex;
  border-bottom: 1px dotted black;
  padding-bottom: 10px;
  padding-top: 10px;
`

const ItemColumn = styled.div`
  width: 390px;
  padding-left: 10px;
`;

const QtyColumn = styled.div`
  width: 80px;
  text-align: center;
`;

const PriceColumn = styled.div`
  width: 160px;
  text-align: center;
`;

const TotalColumn = styled.div`
  width: 160px;
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