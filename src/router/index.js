import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '@/views/HomeView.vue';
// import JobResultView from '@/views/JobResultView.vue';
// import JobView from '@/views/JobView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/jobs/results',
      name: 'JobResults',
      component: () => import('../views/JobResultView.vue')
    },
    // Asi especificamos que es una ruta q recibe un parametro
    {
      path: '/jobs/results/:id',
      name: 'JobListing',
      // Asi usamos la funcion lazy load.
      component: () => import('../views/JobView.vue')
    }
  ]
});

export default router;
