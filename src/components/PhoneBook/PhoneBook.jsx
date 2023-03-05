import { useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Loader from 'shared/components/Loader/Loader';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

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
{/* 
        {!isContacts && !isLoading && (
          <p className={css.text}>No contacts in list</p>
        )} */}
        <ToastContainer autoClose={1500} position="top-center" />
        </>
    )
    
}