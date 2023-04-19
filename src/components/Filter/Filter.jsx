import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { Form, Label, Input } from './Filter.styled';
import { changeFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Form>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </Label>
    </Form>
  );
};

export default Filter;
