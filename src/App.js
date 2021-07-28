import React, { Component } from 'react';
import Feedback from './components/FeedBack/Feedback';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import Container from './components/Section/Container';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = opt => {
    const feedback = opt.currentTarget.dataset.feedback;
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedbackPercent = () => {
    const total = this.totalFeedback();
    const { good } = this.state;

    return total !== 0 ? Math.round((good * 100) / total) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <Container>
            <Feedback
              options={this.state}
              changeFeedback={this.handleFeedback}
            />
          </Container>
        </Section>

        <Section title="Statistics">
          <Container>
            {this.totalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.totalFeedback()}
                positivePercent={this.positiveFeedbackPercent()}
              />
            ) : (
              <Notification message="No feedback given" />
            )}
          </Container>
        </Section>
      </Container>
    );
  }
}

export default App;
