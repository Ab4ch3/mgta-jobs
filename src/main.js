import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import '@/assets/style.css';

import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);

app.use(createPinia());

app.use(router);

app.component('FontAwesomeIcon', FontAwesomeIcon); //Registra los componentes globales

app.mount('#app');
