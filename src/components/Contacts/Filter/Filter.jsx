import PropTypes from 'prop-types';

import { Label, Input } from './Filter.styled';

export const Filter = ({ onChangeInput }) => {
  return (
    <form onChange={onChangeInput}>
      <Label>
        Find contacts by name
        <Input type="text" name="filter" />
      </Label>
    </form>
  );
};

Filter.propType = {
  onChangeInput: PropTypes.func.isRequired,
};
