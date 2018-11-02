import styled from 'styled-components';

const DeleteItemButton = styled.button`
  background: "white";
  color: "black";
  font-size: 1em;
  border: 1.5px solid transparent;
  border-radius: 5px;
  &:hover {
    transition: all 150ms linear;
    opacity: 0.6;
    cursor: pointer;
    border: 1.5px solid black;
    border-radius: 5px;
  }
`;

export default DeleteItemButton;
