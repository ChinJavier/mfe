import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// Mount function para levantar la app
const mount = (el) => {
    ReactDom.render(
        <App />,
        el
    );
};


// Si estamos corriendo en desarrollo y en isolation se debe llamar inmediatamente
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}


// Si estamos corriendo a través del contenedor solamente exportamos la función
export { mount };