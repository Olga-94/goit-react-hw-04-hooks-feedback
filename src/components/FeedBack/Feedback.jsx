import PropTypes from 'prop-types';
import { List, Item } from './Feedback.styles';
import Button from '../Button/Button';

const Feedback = ({ options, changeFeedback }) => {
  options = Object.keys(options);

  return (
    <List>
      {options.map(option => (
        <Item key={option}>
          <Button feedback={option} onClick={changeFeedback} />
        </Item>
      ))}
    </List>
  );
};

Feedback.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  changeFeedback: PropTypes.func.isRequired,
};

export default Feedback;
