import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/Form/Form';
import Filter from 'components/filter/filter';
import { Block, Totle } from './ContactsApp.styled';





export const ContactsApp = () => {
  return (
  <>
      <Block>
        <Totle>Phonebook</Totle>
        <ContactForm  />
        <Filter />
    
      <ContactList/>
      
</Block>
     </>
    
    
  )
}





