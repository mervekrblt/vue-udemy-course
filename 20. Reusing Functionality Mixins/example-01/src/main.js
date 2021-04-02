import { createApp } from 'vue';

import App from './App.vue';
import logginMixin from './mixins/logger'

const app = createApp(App)

app.mixin(logginMixin)
app.mount('#app');
