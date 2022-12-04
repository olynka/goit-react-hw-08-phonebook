import { Layout } from './SharedLayout/AppBar/AppBar';
import { Routes, Route,Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ContactsApp } from './pages/Contacts/ContactsApp';
import { useDispatch } from 'react-redux';
import { authCurrentUser } from 'redux/auth/authOperation';
import { useEffect } from 'react';
import PublicRoute from './SharedLayout/PublicRoute';
import PrivateRoute from './SharedLayout/PrivateRoute';
import NotFound from './pages/PageNotFound/PageNotFound';



export const App = () => {
   const dispatch = useDispatch();
useEffect(() => {
    dispatch(authCurrentUser());
  }, [dispatch]);
  return (
    < Routes>
       <Route path='/' element={<Layout/>}>
     <Route index element={<Navigate to="home" />} />
        <Route path='home' element={<Home />} />
         <Route element={<PublicRoute />}>
        <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>
           <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsApp />} />
          </Route>
      </Route>
       <Route path="*" element={<NotFound/>} />
    </ Routes>
    
  )
};





