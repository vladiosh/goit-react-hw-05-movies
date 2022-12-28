import { Form, Input, Button } from './SearchBox.styled';
import PropTypes from 'prop-types';

export const SearchBox = ({ handleSubmit, value, setInputValue }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search movie"
        value={value}
        onChange={event => setInputValue(event.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};
