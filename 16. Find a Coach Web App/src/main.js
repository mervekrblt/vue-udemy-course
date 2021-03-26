import { createApp } from 'vue';
import App from './App.vue'

import router from './router'
import store from './store/index'
import BaseCard from './components/ui/BaseCard'
import BaseButton from './components/ui/BaseButton'
import BaseBadge from './components/ui/BaseBadge'

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)

app.use(router)
app.use(store)
app.mount('#app');
