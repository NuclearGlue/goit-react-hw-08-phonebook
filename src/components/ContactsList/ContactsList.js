import { useGetContactsQuery } from 'redux/contacts/operations';
import style from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { findContacts } from 'helpers/filter';
import { ContactItem } from 'components/ContactItem/ContactItem';

const ContactsList = () => {
  const { data, isLoading, isError, error } = useGetContactsQuery();
  const contactsFilter = useSelector(state => state.filter);

  if (isLoading) {
    return <h2>In process</h2>;
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
          <ContactItem
            key={element.id}
            id={element.id}
            name={element.name}
            phone={element.number}
          />
        );
      })}
    </ul>
  );
};

export default ContactsList;
