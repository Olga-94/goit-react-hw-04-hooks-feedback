import PropTypes from 'prop-types';
import { Title, Wrapper } from './Section.styles';
import { FaRegCommentAlt, FaRegChartBar } from 'react-icons/fa';
const Section = ({ title, children }) => {
  return (
    <Wrapper>
      {title && (
        <Title>
          {title}
          {title === 'Please leave feedback' && <FaRegCommentAlt />}
          {title === 'Statistics' && <FaRegChartBar />}
        </Title>
      )}

      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
