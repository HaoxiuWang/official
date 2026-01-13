import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * SENIOR NOTE:
 * We use StrictMode to catch side effects and deprecated API usage.
 * Performance is monitored via the V8 runtime; 
 * the UI remains a thin layer over our core logic.
 */

const rootElement = document.getElementById('app');

if (!rootElement) {
  throw new Error("Failed to find the root element. Ensure index.html has <div id='root'></div>");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// A signature for those who open the DevTools
console.log(
  "%c CORE_LOGIC %c DevTools are the only 'framework' you truly need. ",
  "color: #020c1b; background: #64ffda; font-weight: bold; padding: 4px; border-radius: 2px;",
  "color: #64ffda; background: #112240; padding: 4px;"
);