import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue'

// Mount function para levantar la app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};


// Si estamos corriendo en desarrollo y en isolation se debe llamar inmediatamente
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}


// Si estamos corriendo a través del contenedor solamente exportamos la función
export { mount };