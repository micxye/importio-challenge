import styled from 'styled-components';

const QtyInput = styled.input`
  width: 40px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
  -moz-appearance:textfield;
  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`;

export default QtyInput;
