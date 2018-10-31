import React from 'react';
import styled from 'styled-components';
import RowWrapper from './RowWrapper';

const ItemInput = styled.input`
  width: 350px;
  height: 30px;
  border: 1px solid black;
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
        {this.props.name}
      </RowWrapper>
    )
  }
}
