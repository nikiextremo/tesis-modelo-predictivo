require('./bootstrap');
import { InertiaProgress } from '@inertiajs/progress';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';
// createInertiaApp({
//   resolve: name => require(`./Pages/${name}`),
//   setup({ el, App, props }) {
//     //  InertiaProgress.init();
//     // console.log(el, App, props);
//     createRoot(el).render(<App {...props} />)
//   },
// })

const app = document.getElementById('app');

createRoot(app).render(
  <InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={(name) => import(`./Pages/${name}`).then((module) => module.default)}
  />
);

// Configuración de Inertia
// createInertiaApp({
//   resolve: (name) => require(`./Pages/${name}`).default,
//   setup({ el, App, props }) {
//     InertiaProgress.init();
//     const app = el.querySelector('#app'); // Obtén el elemento con el ID "app" dentro de "el"
//     ReactDOM.render(
//       <React.StrictMode>
//         <App {...props} />
//       </React.StrictMode>,
//       app // Renderiza la aplicación de React en el elemento "app"
//     );
//   },
// });