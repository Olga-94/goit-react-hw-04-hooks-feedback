import PropTypes from 'prop-types';
import { Btn } from './Button.styles';
import {
  FaRegSmile,
  FaRegMehRollingEyes,
  FaRegFrownOpen,
} from 'react-icons/fa';

const Button = ({ feedback, onClick }) => {
  return (
    <Btn type="button" data-feedback={feedback} onClick={onClick}>
      {feedback === 'good' && (
        <FaRegSmile size="110" color="green" style={{ marginBottom: 10 }} />
      )}
      {feedback === 'neutral' && (
        <FaRegMehRollingEyes
          size="110"
          color="grey"
          style={{ marginBottom: 10 }}
        />
      )}
      {feedback === 'bad' && (
        <FaRegFrownOpen size="100" color="red" style={{ marginBottom: 10 }} />
      )}
      {feedback}
    </Btn>
  );
};

Button.propTypes = {
  feedback: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
