import { ContactForm } from './ContactsForm/ContactForm';
import { useState } from 'react';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem('contacts')));
  }, []);

  useEffect(() => {
    contacts.length &&
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = data => {
    if (contacts.some(contact => contact.name === data.name)) {
      return Notify.warning(`Oops! ${data.name} is already in your list`);
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };
    setContacts([...contacts, newContact]);
  };

  const onFilterChange = ev => {
    setFilter(ev.currentTarget.value);
  };

  const filterContacts = () => {
    const lowerFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerFilter)
    );
  };

  const deleteContactFromList = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = filterContacts();

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />
      <h2>Contacts</h2>
      <Filter onChange={onFilterChange} />
      {contacts.length ? (
        <ContactList
          contacts={filteredContacts}
          deleteContactFromList={deleteContactFromList}
        />
      ) : (
        <p>There are no contacts in your list</p>
      )}
    </div>
  );
};
