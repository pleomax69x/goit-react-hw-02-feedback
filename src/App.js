import './App.css';
import { Component } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedBackOptions from './components/FeedbackOptions';

const data = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hahdleFeedBack = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  // handleIncGood = () => {
  //   this.setState((oldState) => ({
  //     good: oldState.good + 1,
  //   }));
  // };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round(100 / total) * good : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivPercent = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={data}
            onLeaveFeedback={this.hahdleFeedBack}
          />
        </Section>

        <Section title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivPercent}
          />
        </Section>
      </>
    );
  }
}

export default App;
