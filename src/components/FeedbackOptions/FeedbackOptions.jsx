import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = Object.keys(options);

  return (
    <>
      {buttons.map((button) => (
        <button type="button" key={button} onClick={onLeaveFeedback}>
          {button.toUpperCase().slice(0, 1) + button.slice(1)}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
