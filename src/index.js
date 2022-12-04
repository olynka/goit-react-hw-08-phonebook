import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { store,persistor} from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';


import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
        
       <BrowserRouter basename="/goit-react-hw-08-phonebook">
      
        <App />
        </BrowserRouter >
        
      </Provider>
      </PersistGate>
  </React.StrictMode>
);
