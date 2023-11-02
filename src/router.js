import { createRouter, createWebHashHistory } from 'vue-router';
import Greeting from './views/GreetingPage.vue';

const routes = [
  {
    path: '/',
    name: 'Greeting',
    component: Greeting,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;