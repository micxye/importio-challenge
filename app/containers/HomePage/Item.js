import React from 'react';
import styled from 'styled-components';
import RowWrapper from './RowWrapper';

const ItemInput = styled.input`
  width: 350px;
  height: 30px;
  border: 1px solid black;
`;

const QtyInput = styled.input`
  width: 58px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
`;

const PriceInput = styled.input`
  width: 150px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
`;

const TotalPrice = styled.div`
  width: 197px;
  height: 30px;
  border-bottom: 1px solid black;
  text-align: center;
`;

const DeleteItemButton = styled.button`
  background: "white";
  color: "black";
  font-size: 1em;
  border: 2px solid transparent;
  border-radius: 5px;
  &:hover {
    transition: all 150ms linear;
    opacity: 0.6;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 5px;
  }
`;

export default class Item extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <RowWrapper>
        <ItemInput />
        <QtyInput />
        <PriceInput />
        <TotalPrice></TotalPrice>
        <DeleteItemButton>x</DeleteItemButton>
      </RowWrapper>
    )
  }
}
