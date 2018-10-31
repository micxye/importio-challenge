import styled from 'styled-components';

const NewItemButton = styled.button`
  background: "white";
  color: "black";
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  &:hover {
    transition: all 150ms linear;
    opacity: 0.6;
    cursor: pointer;
  }
`;

export default NewItemButton;
