import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/operations';
import styles from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { findContacts } from 'helpers/filter';

const ContactsList = () => {
  const { data, isLoading, isError, error } = useGetContactsQuery();
  const contactsFilter = useSelector(state => state.filter);
  const [deleteContacts] = useDeleteContactMutation();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (data === undefined) {
    return <p>text</p>;
  }
  const contacts = findContacts(data, contactsFilter);
  if (
    contacts.length === 0 ||
    data === undefined ||
    (isError && error.status === 404)
  ) {
    return <h2>Please Add Contacts</h2>;
  }
  return (
    <ul className={styles.list}>
      {contacts.map(element => {
        return (
          <li key={element.id} className={styles.item}>
            <span className={styles.contact}>
              <span className={styles.name}>{element.name}:</span>
              <span className={styles.phone}>{element.number}</span>
            </span>
            <span className={styles.buttonsBox}>
              <button
                id={element.id}
                className={styles.button}
                onClick={() => deleteContacts(element.id)}
              >
                Delete
              </button>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
