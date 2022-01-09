import React, { Component } from 'react';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodReview = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  addBadReview = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  addNeutralReview = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <Container>
        <section>
          <h2>Please, leave feedback</h2>
          <button type="button" onClick={this.addGoodReview}>
            Good
          </button>
          <button type="button" onClick={this.addNeutralReview}>
            Neutral
          </button>
          <button type="button" onClick={this.addBadReview}>
            Bad
          </button>
        </section>
        <section>
          <h2>Statistics</h2>
          {this.countTotalFeedback() === 0 ? (
            <p>No feedback given</p>
          ) : (
            <ul>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>
              <li>Total: {this.countTotalFeedback()}</li>
              <li>
                Positive feedback: {this.countPositiveFeedbackPercentage()}%
              </li>
            </ul>
          )}
        </section>
      </Container>
    );
  }
}

export default App;
