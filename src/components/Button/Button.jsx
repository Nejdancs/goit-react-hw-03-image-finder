import { LoadMore } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <LoadMore onClick={onClick} type="button">
      Load more
    </LoadMore>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
