import style from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contacts/operations';
import EditFrom from 'components/ContactItem/EditForm';
import { useState } from 'react';

export const ContactItem = ({ id, name, phone }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [deleteContacts] = useDeleteContactMutation();

  const changeEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <li className={style.item}>
      <span className={style.contact}>
        <span className={style.name}>{name}:</span>
        <span className={style.phone}> {phone}</span>
      </span>
      <span>
        <button
          id={id}
          className={style.button}
          onClick={() => deleteContacts(id)}
        >
          Delete
        </button>
        <button className={style.button} onClick={() => changeEdit()}>
          Edit
        </button>
      </span>
      {isEdit && <EditFrom contactId={id} name={name} phone={phone} />}
    </li>
  );
};
