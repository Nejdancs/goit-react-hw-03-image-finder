import { Header, Form, Button, ButtonLabel, Input } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <Button type="submit">
          <AiOutlineSearch size="26px" />
          <ButtonLabel></ButtonLabel>
        </Button>

        <Input
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="Search images and photos"
          name="search"
        />
      </Form>
    </Header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
