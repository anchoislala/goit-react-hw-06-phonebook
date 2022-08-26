import PropTypes from 'prop-types';
import { deleteContact } from "redux/store";
import { useDispatch } from "react-redux";
import { ContactInfo, ContactInformation, DeleteButton } from "./ContactsItem.styled";

const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  return (
    <ContactInfo key={id}>
      <ContactInformation>- {name}: {number}</ContactInformation>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>Delete</DeleteButton>
    </ContactInfo>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
   }),
};

export default ContactsItem;