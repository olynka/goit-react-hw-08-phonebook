import React from 'react';
import { UserName } from '../UserName';
import { AppNav } from '../AuthNav';
import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/auth/authSelectors';
import { Header,Link} from '../AppBar/AppBar.styled';
import { Div } from './Navigation.styled';

export default function Navigation() {
  const isLogin = useSelector(getIsLogin);
  return (
     <Header>
      < Div >
       <nav>
      <Link to="/home">
        Home
      </Link>
      {isLogin  && (
        <Link to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
      {/* <div>{isLogin && <NavLink to="/contacts">Contacts</NavLink>}</div> */}
      {isLogin ? <UserName /> : <AppNav />}
     
       
      </ Div >
   </Header>
  );
}
