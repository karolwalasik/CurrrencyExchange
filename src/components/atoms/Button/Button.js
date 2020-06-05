import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ secondary }) => (secondary ? '#ff5a10' : '#fff')};
  width: 100px;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  border: ${({ secondary }) => (secondary ? 'unset' : '1px solid #ff5a10')};
  color: ${({ secondary }) => (secondary ? '#fff' : '#303030')};
  text-transform: uppercase;
  margin: 0 5px;

  ${({ addButton }) =>
    addButton &&
    css`
      width: 30px;
      background-color: #64c632;
      color: #fff;
      border: unset;
      border-radius: 50%;
      &:hover {
        transform: translateY(-3px);
      }
    `};

  ${({ removeButton }) =>
    removeButton &&
    css`
      width: 30px;
      background-color: #ff5a10;
      color: #fff;
      border: unset;
      border-radius: 50%;
      &:hover {
        transform: translateY(-3px);
      }
    `};

  &:hover {
    cursor: pointer;
    box-shadow: 2px 4px 5px #303030;
  }
`;

export default Button;
