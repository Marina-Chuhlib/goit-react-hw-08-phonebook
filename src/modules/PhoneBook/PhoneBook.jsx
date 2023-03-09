import { useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'shared/components/Loader/Loader';
import ContactForm from 'modules/PhoneBook/ContactForm/ContactForm';
import ContactsList from 'modules/PhoneBook/ContactsList/ContactsList';
import Filter from 'modules/PhoneBook/Filter/Filter';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

export const PhoneBook = () => {
  const isContacts = Boolean(useSelector(getFilteredContacts).length);
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}

      {isContacts && <ContactsList />}

      {!isContacts && !isLoading && <p>No contacts in list</p>}
      <ToastContainer autoClose={1500} position="top-center" />
    </>
  );
};

// className={css.text}
