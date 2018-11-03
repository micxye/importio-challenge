import styled from 'styled-components';

const PercentInput = styled.input`
  width: 41px;
  height: 30px;
  text-align: center;
  -moz-appearance:textfield;
  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`;

export default PercentInput;
