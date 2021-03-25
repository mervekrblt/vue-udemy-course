import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList'
import UsersList from './components/users/UsersList'
import TeamMembers from './components/teams/TeamMembers'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect:'/teams'}, 

        {path: '/teams', component: TeamsList, children: [
          {path: '/teams/:teamId', component: TeamMembers},  
        ]},

        {path: '/users', component: UsersList},
        
        {path: '/:notFound(.*)', redirect: '/teams'},
    ],
    scrollBehavior(to, from,savedPosition) {
        console.log(to, from,savedPosition)
        if(savedPosition) {
            return savedPosition
        }
        return {left: 0, top: 0}
    }
})

const app = createApp(App)
app.use(router)

app.mount('#app');
