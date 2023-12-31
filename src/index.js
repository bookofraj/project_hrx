import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav';
import { useFirebase } from './Context/Firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <useFirebase>
    <Nav />
    </useFirebase>
  </React.StrictMode>
);

