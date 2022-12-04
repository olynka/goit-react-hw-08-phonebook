import { Link } from './AppBar/AppBar.styled'
import React from 'react';
const navItems = [
    
   { href: 'register', text: 'Register' },
  { href: 'login', text: 'Login' },

  
];



export const AppNav = () => {
  return (
    <>
        {/* <Header> */}
        <nav>
          {navItems.map(({ href, text }) => (
            <Link to={href} key={href}>{text}</Link>
          ))}
        </nav>
      {/* </Header> */}
       </>
    );
}