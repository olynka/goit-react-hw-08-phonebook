import React from 'react';
import { nanoid } from "nanoid";
import { useState } from 'react';
import { Label, Button, Input, Form } from "components/Form/FormStyled";
import { logIn } from 'redux/auth/authOperation'
import { useDispatch } from 'react-redux';

 
  const emailId = nanoid();
  const passwordId = nanoid();

export const LoginPage = () => {
     const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
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
      email: email,
      password: password,
    };
  dispatch (logIn(contact))
      setEmail('');
        setPassword('')
  };


  return (
    <div>
    
      <Form onSubmit={handleSubmit} >
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
    );
   
    </div>
  );
};