import { useRoute } from 'vue-router';
import { computed } from 'vue';
/* 
  Los composanle , son funciones en archivos js
  usando las utilidades de vue,js
*/
const useConfirmRoute = (routeName) => {
  const route = useRoute();
  return computed(() => route.name === routeName);
};

export default useConfirmRoute;
