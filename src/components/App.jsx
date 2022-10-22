import Section from './Section/Section.styled';

import ContactList from './ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

// import contacts from 'contacts.json';
import { nanoid } from 'nanoid';

import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

const Phonebook = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100vw;
  max-width: 900px;
  margin: 50px auto;

  font-family: 'Inconsolata';

  input {
    border: none;
    border-bottom: 1px solid #913fd540;
    padding: 7px 10px;

    cursor: pointer;

    transition: border-color 250ms ease;

    &:hover,
    &:focus {
      border-color: #913fd5;
    }
  }
`;

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [visibleContacts, setVisibleContacts] = useState([]);

  const isFirstRender = useRef(true);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('contacts'));
    setContacts(items);
    setVisibleContacts(items);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const searchString = filter.toLowerCase();
    if (contacts) {
      setVisibleContacts(contacts.filter(({ name }) => name.toLowerCase().includes(searchString)));
    }
  }, [contacts, filter]);

  const addContact = (name, number) => {
    if (contacts && contacts.some(contact => contact.name === name)) {
      alert(`${name} already exist`);
      return false;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (!contacts) setContacts([contact]);
    else setContacts(state => [contact, ...state]);

    return true;
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const removeContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  return (
    <Phonebook>
      <Section className="Phonebook__sidebar">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section className="Phonebook__list">
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={visibleContacts} onClick={removeContact} />
      </Section>
    </Phonebook>
  );
};

export default App;
