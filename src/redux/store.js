import { filtersReducer } from './contacts/filtersSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
