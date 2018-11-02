import styled from 'styled-components';

const PriceInput = styled.input`
  width: 145px;
  height: 30px;
  -moz-appearance:textfield;
  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`;

export default PriceInput;
