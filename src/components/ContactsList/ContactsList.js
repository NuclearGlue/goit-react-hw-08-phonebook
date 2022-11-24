import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/operations';
import style from './ContactsList.module.css';
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
    return <p>Something wrong! Please try again later</p>;
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
    <ul className={style.list}>
      {contacts.map(element => {
        return (
          <li key={element.id} className={style.item}>
            <span className={style.contact}>
              <span className={style.name}>{element.name}:</span>
              <span className={style.phone}> {element.number}</span>
            </span>
            <span className={style.buttonsBox}>
              <button
                id={element.id}
                className={style.button}
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
