import React from 'react';
import { nanoid } from "nanoid";
import { useState } from 'react';
import { Label, Button, Input, Form } from "components/Form/FormStyled";
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';


 const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

export const RegisterPage = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
    const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      email: email,
      password: password,
      };
      dispatch(register(contact));
    setName('');
      setEmail('');
      setPassword('')
  };


  return (
    <div>
    
      <Form onSubmit={handleSubmit} >
        <Label htmlFor={nameId}>
          Name
          <Input
            type="text"
            name="name"
                 id={nameId}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required />
        </Label>
        <Label htmlFor={emailId} >
          Email
          <Input
            type="email"
            name="email"
               id={emailId}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={email}
            onChange={handleChange}
            required />
        </Label>
         <Label htmlFor={passwordId} >
         Password
          <Input
            type="password"
            name="password"
               id={passwordId}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={password}
            onChange={handleChange}
            required />
        </Label>
        <Button type="submit">Add contact</Button >
      </Form>
    

    </div>
  );
};