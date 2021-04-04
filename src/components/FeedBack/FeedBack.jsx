import React, { Component } from "react";

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedBackBtn = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  neutralFeedBackBtn = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badFeedBacKBtn = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button
            type="button"
            onClick={
              (countTotalFeedback,
              () => {
                this.goodFeedBackBtn();
              })
            }
          >
            Good
          </button>
          <button
            type="button"
            onClick={
              (countTotalFeedback,
              () => {
                this.neutralFeedBackBtn();
              })
            }
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={
              (countTotalFeedback,
              () => {
                this.badFeedBacKBtn();
              })
            }
          >
            Bad
          </button>
        </div>
        <div>
          <h1>Statistics</h1>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>
            Total:
            {countTotalFeedback}
          </p>
          <p>Positive feedback: </p>
        </div>
      </div>
    );
  }
}

export default FeedBack;
