import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserService from './services/UserService';
import HttpService from './services/HttpService';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

//const renderApp = () => ReactDOM.render(<App/>, document.getElementById("root"));

// UserService.initKeycloak(root);
// HttpService.configure()

