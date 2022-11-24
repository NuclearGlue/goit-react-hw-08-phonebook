import { useDispatch, useSelector } from 'react-redux';
import { changesFilter } from 'redux/contacts/contactsReducer';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(changesFilter(event.target.value));
  };

  const value = useSelector(state => state.filter);

  return (
    <label>
      <span>Find contacts by name or number</span>
      <input
        type="text"
        name="findField"
        value={value}
        onChange={changeFilter}
      />
    </label>
  );
};
