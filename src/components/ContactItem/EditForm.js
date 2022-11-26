import { useState } from 'react';
import {
  useGetContactsQuery,
  usePatchContactMutation,
} from 'redux/contacts/operations';

import style from './ContactItem.module.css';

function AddContactsForm({ contactId, name, phone }) {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(phone);

  const [patchContact] = usePatchContactMutation();
  const { data } = useGetContactsQuery();

  const handleSubmit = event => {
    event.preventDefault();
    const names = data.map(contact => contact.name.toLowerCase());
    const fieldNameValue = event.target.elements.name.value;

    if (names.includes(fieldNameValue.toLowerCase())) {
      alert(`${fieldNameValue} is already in contact`);
    } else {
      patchContact({
        contactId,
        name: contactName,
        number: contactNumber,
      });
      console.log({ contactId, name: contactName, number: contactNumber });
    }
  };

  const handleInputChange = event => {
    if (event.currentTarget.name === 'name') {
      setContactName(event.currentTarget.value);
    } else if (event.currentTarget.name === 'number') {
      setContactNumber(event.currentTarget.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            value={contactName}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>

        <label className={style.label}>
          Number
          <input
            className={style.input}
            type="tel"
            name="number"
            value={contactNumber}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
          />
        </label>

        <button className={style.finish_edit_button} type="submit">
          Finish Change
        </button>
      </form>
    </div>
  );
}

export default AddContactsForm;
