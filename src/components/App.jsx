import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state);
  // };
  render() {
    return (
      <div className="container">
        <ContactForm />
      </div>
    );
  }
}
