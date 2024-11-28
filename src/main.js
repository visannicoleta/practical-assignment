import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store/store';
import './lion-elements/SimpleInput';
import './lion-elements/SimpleButton';
import '@lion/ui/form';

library.add(faHome, faEnvelope, faSignInAlt);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(store);
app.mount('#app');