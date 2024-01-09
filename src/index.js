import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ScheduleProvider } from './components/ScheduleContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScheduleProvider>
      <App />
    </ScheduleProvider>
  </React.StrictMode>
);

reportWebVitals();
