import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createContact, deleteContact, updateFiter } from "redux/store";
import shortid from "shortid";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

// export default function App() {

//   // const savedContacts = () => {
//   //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
//   // }

//   // const [contacts, setContacts] = useState(savedContacts)
//   // const [filter, setFilter] = useState('');

//   // useEffect(() => {
//   //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
//   // }, [contacts])

//   const dispatch = useDispatch();
//   const existingContact = useSelector(state => state.items)

//   const formSubmitHandler = data => {

//     const { name, number } = data;

//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     }
    
//     const nameExists = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

//     if (nameExists) {
//       alert(`${name} is already in contacts.`)
//       return;
//     }

//     setContacts(prevContacts => [contact, ...prevContacts])
//   };

//   const changeFilter = event => {
//     setFilter(event.currentTarget.value);
//   };

//   const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter));
//   };

//   const deleteContact = (contactId) => {
//     setContacts(prevContacts => (prevContacts.filter(contact => contact.id !== contactId)))
//   };

//   return (
//     <div
//         style={{
//           height: '100vh',
//           display: 'grid',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101'
//         }}
//       >
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={formSubmitHandler} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={changeFilter} />
//         <ContactList contacts={getFilteredContacts()} onDeleteContact={deleteContact} />
//       </div>
//   )
// }

export default function App() {

  // const savedContacts = () => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // }

  // const [contacts, setContacts] = useState(savedContacts)
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])

  const dispatch = useDispatch();
  const existingContacts = useSelector(state => state.contacts.items)
  const filter = useSelector(state => state.contacts.filter)

  // const existingContacts = useSelector(state => state.contacts)
  // const filter = useSelector(state => state.filter)



  console.log('existingContacts', existingContacts)
    console.log('filter', filter)

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

    // setContacts(prevContacts => [contact, ...prevContacts])
    dispatch(createContact(contact));
  };

  const changeFilter = event => {
    dispatch(updateFiter(event.currentTarget.value));
    // setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return existingContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  // const deleteContact = (contactId) => {
  //   setContacts(prevContacts => (prevContacts.filter(contact => contact.id !== contactId)))
  // };

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
        <ContactList contacts={getFilteredContacts()} onDeleteContact={deleteContact} />
      </div>
  )
}