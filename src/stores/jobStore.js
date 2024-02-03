import { defineStore } from 'pinia';
import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_API_URL;

export const useJobStore = defineStore('jobs', {
  state: () => ({
    jobs: [],
    selectedOrganizations: []
  }),
  getters: {
    uniqueOrganizations: (state) => {
      const uniqueOrg = new Set();
      state.jobs.forEach((job) => {
        uniqueOrg.add(job.organization);
      });
      return uniqueOrg;
    }
  },
  actions: {
    async getJobs() {
      let response = await axios.get(`${baseURL}/jobs`);
      return (this.jobs = response.data);
    }
  }
});
