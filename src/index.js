import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hookfunc from './Components/hooks';
import Todoapp from './Components/Todo/Todoapp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todoapp/>
  </React.StrictMode>
);

