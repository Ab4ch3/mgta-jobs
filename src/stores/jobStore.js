import { defineStore } from 'pinia';
import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_API_URL;

export const useJobStore = defineStore('jobs', {
  state: () => ({ jobs: [] }),
  getters: {},
  actions: {
    async getJobs() {
      let response = await axios.get(`${baseURL}/jobs`);
      return (this.jobs = response.data);
    }
  }
});
