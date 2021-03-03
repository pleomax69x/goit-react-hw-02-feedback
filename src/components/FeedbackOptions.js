import PropTypes from 'prop-types';

const FeedBackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button type="button" data-feedback={feedback} onClick={onLeaveFeedback}>
      {feedback}
    </button>
  );
};

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedBackButton
      key={option}
      feedback={option}
      onLeaveFeedback={onLeaveFeedback}
    />
  ));
};

FeedBackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;
