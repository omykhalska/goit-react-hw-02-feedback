import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const [good, neutral, bad] = options;
  return (
    <>
      <Button type="button" onClick={() => onLeaveFeedback(good)}>
        Good
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback(neutral)}>
        Neutral
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback(bad)}>
        Bad
      </Button>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
