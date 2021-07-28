import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  color: ${props =>
    (props.good && 'green') ||
    (props.neutral && 'grey') ||
    (props.bad && 'red') ||
    '#9370db'};
  & svg {
    margin-right: 5px;
  }
`;
