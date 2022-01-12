import React from 'react';
import PropTypes from 'prop-types';
import {
  StatsWrapper,
  StatsItem,
  StatsItemType,
  Meter,
} from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatsWrapper>
      <StatsItem>
        <StatsItemType>Good: </StatsItemType>
        {good}
      </StatsItem>
      <StatsItem>
        <StatsItemType>Neutral: </StatsItemType>
        {neutral}
      </StatsItem>
      <StatsItem>
        <StatsItemType>Bad: </StatsItemType>
        {bad}
      </StatsItem>
      <StatsItem>
        <StatsItemType>Total: </StatsItemType>
        {total}
      </StatsItem>
      <StatsItem>
        <StatsItemType>Positive feedbacks:</StatsItemType>
        <Meter
          value={positivePercentage}
          min="0"
          low="50"
          optimum="95"
          high="90"
          max="100"
        ></Meter>
        {positivePercentage}%
      </StatsItem>
    </StatsWrapper>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
