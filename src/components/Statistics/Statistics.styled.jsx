import styled from 'styled-components';

export const StatsWrapper = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  list-style: none;
`;

export const StatsItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 0.75rem;
  }
`;

export const Meter = styled.meter`
  margin: 0 0.5rem;
`;

export const StatsItemType = styled.span`
  font-weight: 700;
`;
