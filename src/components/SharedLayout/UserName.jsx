import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authSelectors from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperation';
import { ButtonLogOut, DivMenu, P } from 'components/AppStyled';


export const  UserName = () => {
    const nameUser = useSelector(authSelectors.getUserName);
   
  const dispatch = useDispatch();
  return (
      <DivMenu>
            
      <P>{nameUser.name}</P>
      <ButtonLogOut
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </ButtonLogOut>
    </DivMenu>
  );
}
