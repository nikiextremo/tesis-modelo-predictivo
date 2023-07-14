require('./bootstrap');
import { createRoot } from 'react-dom/client';
import React from 'react';
import { InertiaApp } from '@inertiajs/inertia-react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
}

const app = document.getElementById('app');

createRoot(app).render(
  <App>
    <InertiaApp
      initialPage={JSON.parse(app.dataset.page)}
      resolveComponent={(name) => import(`./Pages/${name}`).then((module) => module.default)}
    />
  </App>
);