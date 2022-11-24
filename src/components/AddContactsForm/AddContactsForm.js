import { useState } from 'react';
import { useAddContact, useGetContactsQuery } from 'redux/contacts/contactsApi';

const AddContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data } = useGetContactsQuery();

  const handleSubmit = event => {
    event.preventDefault();
    const names = data.map(contact => contact.name.toLowerCase());
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    if (names.includes(name.toLowerCase())) {
      alert(`${name} is already in contact`);
    } else {
      useAddContact({ name: name, number: number });
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleInputChange = event => {
    if (event.currentTarget.name === 'name') {
      setName(event.currentTarget.value);
    } else if (event.currentTarget.name === 'number') {
      setNumber(event.currentTarget.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="form__label">
          Name
          <input
            className="form__input"
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className="form__label">
          Number
          <input
            className="form__input"
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className="form__setting-contact" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default AddContactsForm;
