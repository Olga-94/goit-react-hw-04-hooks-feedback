import PropTypes from 'prop-types';
import { Section } from './Section.styles';

const Container = ({ children }) => {
  return <Section>{children}</Section>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
