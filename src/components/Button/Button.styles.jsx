import styled from '@emotion/styled';

export const Btn = styled.button`
  width: 150px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #f0f0f3;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  // text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  box-shadow: -7px -7px 25px 0 #b4b4b4, 10px 10px 20px 0 #ffffff;
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.2);
  }
`;
