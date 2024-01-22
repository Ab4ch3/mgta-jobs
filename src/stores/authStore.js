import { defineStore } from 'pinia';

export const useAuthStore = defineStore('job', {
  state: () => ({ isLoggedIn: false }),
  getters: {},
  actions: {
    LOGIN_USER() {
      console.log('llege aca');
      this.isLoggedIn = true;
    }
  }
});
