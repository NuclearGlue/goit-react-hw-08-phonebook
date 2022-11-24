import AddContactsForm from 'components/AddContactsForm/AddContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';

export const Contacts = () => {
  return (
    <>
      <AddContactsForm />
      <ContactsFilter />
      <ContactsList />
    </>
  );
};
