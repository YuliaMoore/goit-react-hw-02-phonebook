import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  // Добавление нового контакта в список контактов
  addContact = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };

  // Изменение значения фильтра
  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <ContactForm />
      </div>
    );
  }
}
