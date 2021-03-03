import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <div>
          <p>
            Good: <span>{good}</span>
          </p>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
          <p>
            Bad: <span>{bad}</span>
          </p>
          <p>Total feedback: {total} </p>
          <p>Positive feedback: {positivePercentage}% </p>
        </div>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

export default Statistics;
