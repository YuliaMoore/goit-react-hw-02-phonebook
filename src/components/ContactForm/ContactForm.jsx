import { Component } from 'react';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleSubmit = event => {
    event.preventDefault();

    // Вызов функции onSubmit из родительского компонента с передачей объекта контакта
    this.props.onSubmit({ name: this.state.name, number: this.state.number });

    // Сброс состояния формы
    this.reset();
  };

  // Обработка изменения значений полей формы
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Сброс состояния формы
  reset = () => {
    this.setState({ number: '', name: '' });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
