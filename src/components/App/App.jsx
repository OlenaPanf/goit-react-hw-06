import { useState, useEffect } from 'react'
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import './App.css'

const initialContacts = [
  { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
  { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
  { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
  { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
];


export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}


