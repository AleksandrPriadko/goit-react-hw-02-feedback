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

  countTotalFeedback = () => {
    return this.setState((prevState) => {
      const total = prevState.neutral + prevState.good + prevState.bad;
      return total;
    });
  };

  //   countPositiveFeedbackPercentage = () => {
  //     return (
  //       ((this.goodFeedBackBtn() +
  //         this.neutralFeedBackBtn() +
  //         this.badFeedBacKBtn()) *
  //         100) /
  //       this.countTotalFeedback()
  //     );
  //   };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button
            type="button"
            onClick={() => {
              this.goodFeedBackBtn();
              this.countTotalFeedback();
              this.countPositiveFeedbackPercentage();
            }}
          >
            Good
          </button>
          <button
            type="button"
            onClick={() => {
              this.neutralFeedBackBtn();
              this.countTotalFeedback();
            }}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={() => {
              this.badFeedBacKBtn();
              this.countTotalFeedback();
            }}
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
            {() => this.countTotalFeedback()}
          </p>
          <p>Positive feedback: </p>
        </div>
      </div>
    );
  }
}

export default FeedBack;
