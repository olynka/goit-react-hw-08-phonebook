import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const success = () =>
  toast.success('You added contact in Phone book', {
    theme: 'light',
  });

export const errorMassege = () =>
  toast.error('Sorry samething wrong :( please try again', {
    theme: 'light',
  });

export const dublicate = data =>
  toast.warn(`${data.name} is already in contacts `, {
    theme: 'light',
  });

export const removeMessage = name =>
  toast.info(`You are successful delete ${name} from Phone Book`, {
    theme: 'colored',
  });

export const noLogin = () =>
  toast.warn('Opps wrong email or password please try again', {
    theme: 'dark',
  });

export const noRegistration = () =>
  toast.error('Sorry samething wrong :( please try again', {
    theme: 'colored',
  });
