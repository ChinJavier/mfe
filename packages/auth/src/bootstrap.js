import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function para levantar la app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate)   
    }

    ReactDom.render(
        <App history={history} />,
        el
    );

    return {
        onParentNavigate({ pathname: nextPathname }){
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
};


// Si estamos corriendo en desarrollo y en isolation se debe llamar inmediatamente
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}


// Si estamos corriendo a través del contenedor solamente exportamos la función
export { mount };