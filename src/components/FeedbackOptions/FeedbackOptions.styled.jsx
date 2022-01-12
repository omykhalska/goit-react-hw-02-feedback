import styled from 'styled-components';

export const Button = styled.button`
  background: #fff;
  color: inherit;
  font-size: 1rem;
  text-transform: capitalize;
  padding: 0.25rem 1rem;
  border: 2px solid lavender;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 lavender;
  cursor: pointer;
  transition: all 250ms ease-out;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }

  &:hover {
    background-color: lavender;
  }
`;
