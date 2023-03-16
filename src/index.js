import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main.js';

const rootElement = document.getElementById("root");

// Create a root for the application
const root = ReactDOM.createRoot(rootElement);

// Render the Main component inside the root
root.render(<Main />);