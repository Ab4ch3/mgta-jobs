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
  ],
  // Esta funcion nos permite hacer cosas en cada cambio de ruta
  //En este caso nos lleva a la parte de arriba de nuestra pagina
  scrollBehavior() {
    return { top: 0, left: 0, behavior: 'smooth' };
  }
});

export default router;
