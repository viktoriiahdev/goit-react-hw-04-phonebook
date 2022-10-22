import React from 'react';
import PropTypes from 'prop-types';

import { ContactItem, List } from './ContactList.styled';
import ButtonWithIcon from 'components/IconButton/IconButton.styled';

import { HiOutlineX } from 'react-icons/hi';

const ContactList = ({ contacts, onClick }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <p className="ContactItem__name">{name}</p>
        <p className="ContactItem__number">{number}</p>
        <ButtonWithIcon
          aria-label="Remove contact"
          className="ContactItem__remove"
          onClick={() => onClick(id)}
        >
          <HiOutlineX color="red" />
        </ButtonWithIcon>
      </ContactItem>
    ))}
  </List>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onClick: PropTypes.func.isRequired,
};
