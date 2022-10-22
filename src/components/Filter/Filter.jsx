import React from 'react';
import PropTypes from 'prop-types';

import { HiOutlineSearch } from 'react-icons/hi';

import FilterWrapper from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterWrapper>
    <h3>Find by name:</h3>
    <label>
      <input className="Filter__input" name="filter" value={value} onChange={onChange} />
      <HiOutlineSearch className="Filter__icon" />
    </label>
  </FilterWrapper>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
