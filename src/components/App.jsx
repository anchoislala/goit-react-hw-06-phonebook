import { useSelector, useDispatch } from "react-redux";
import { createContact, updateFiter } from "redux/store";
import shortid from "shortid";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

export default function App() {

  const dispatch = useDispatch();
  const existingContacts = useSelector(state => state.contacts.items)
  const filter = useSelector(state => state.contacts.filter)

  const formSubmitHandler = data => {

    const { name, number } = data;

    const contact = {
      id: shortid.generate(),
      name,
      number,
    }
    
    const nameExists = existingContacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (nameExists) {
      alert(`${name} is already in contacts.`)
      return;
    }

    dispatch(createContact(contact));
  };

  const changeFilter = event => {
    dispatch(updateFiter(event.currentTarget.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return existingContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <div
        style={{
          height: '100vh',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={getFilteredContacts()}/>
      </div>
  )
}