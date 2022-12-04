import { UL } from "./ConstListStyled";
import { useDispatch, useSelector } from 'react-redux';
import { Button, List, P } from "./ConstListStyled";
import { fetchContacts,removeContacts } from "redux/contacts/contactsOperations";
import { useEffect } from "react";
import { getContacts } from "redux/contacts/selectors";
import { getFilter } from "redux/contacts/selectors";
import Notification from "components/Utils/Notification";



export default function ContactList() {
  const dispatch = useDispatch();
  const contacts=useSelector(getContacts)
  const filter = useSelector(getFilter);


    const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
      
  }
  const contact = getVisibleContacts();



 useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    if (contacts.length === 0) {
   return <Notification />
  } 

  const elements = contact.map(({ name, number, id }) => {
    return (
      <List key={id}>
      <P>{name} : {number}</P>
        <Button onClick={() => dispatch(removeContacts(id))}>Delete</Button>
      </List>
    );
  });
  return <UL>{elements}</UL>;
}