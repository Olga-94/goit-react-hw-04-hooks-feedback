import PropTypes from 'prop-types';
import {
  FaRegSmile,
  FaRegMehRollingEyes,
  FaRegFrownOpen,
  FaRegListAlt,
  FaRegSmileBeam,
} from 'react-icons/fa';
import { List, Item, Text } from './Statistics.styles';

const Statistics = ({ good, neutral, bad, total, positivePercent = 0 }) => {
  return (
    <List>
      <Item>
        <Text good>
          <FaRegSmile /> Good: {good}
        </Text>
      </Item>
      <Item>
        <Text neutral>
          <FaRegMehRollingEyes /> Neutral: {neutral}
        </Text>
      </Item>
      <Item>
        <Text bad>
          <FaRegFrownOpen /> Bad: {bad}
        </Text>
      </Item>
      <Item>
        <Text total>
          <FaRegListAlt /> Total: {total}
        </Text>
      </Item>
      <Item>
        <Text percentage>
          <FaRegSmileBeam />
          Positive: {positivePercent} %
        </Text>
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};

export default Statistics;
