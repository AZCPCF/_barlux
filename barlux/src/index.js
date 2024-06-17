import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from './Components/website/Provider';
import Theme from './Styles/Theme';
import { ThemeProvider } from '@mui/material';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <ThemeProvider theme={Theme}>
    <App />
    </ThemeProvider>
  </Provider>
);


reportWebVitals();