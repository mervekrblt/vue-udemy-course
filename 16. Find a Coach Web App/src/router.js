import { createRouter, createWebHistory } from 'vue-router';

import CoachDetails from './pages/coaches/CoachDetails'
import CoachesList from './pages/coaches/CoachesList'
import CoachRegistration from './pages/coaches/CoachRegistration'
import ContactCoach from './pages/request/ContactCoach'
import RequestReceived from './pages/request/RequestReceived'
import NotFound from './pages/NotFound'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
