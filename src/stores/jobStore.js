import { defineStore } from 'pinia';
import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_API_URL;

export const useJobStore = defineStore('jobs', {
  state: () => ({
    jobs: [],
    selectedOrganizations: [],
    selectedJobsTypes: []
  }),
  getters: {
    uniqueOrganizations: (state) => {
      const uniqueOrg = new Set();
      state.jobs.forEach((job) => {
        uniqueOrg.add(job.organization);
      });
      return uniqueOrg;
    },
    uniqueJobsTypes: (state) => {
      const uniqueJobs = new Set();
      state.jobs.forEach((job) => {
        uniqueJobs.add(job.jobType);
      });
      return uniqueJobs;
    },
    jobsFilteredByOrganization: (state) => {
      if (state.selectedOrganizations.length === 0) {
        return state.jobs;
      } else {
        return state.jobs.filter((job) => state.selectedOrganizations.includes(job.organization));
      }
    },
    jobsFilteredByJobTypes: (state) => {
      if (state.selectedJobsTypes.length === 0) {
        return state.jobs;
      } else {
        return state.jobs.filter((job) => state.selectedJobsTypes.includes(job.jobType));
      }
    },

    filteredJobs: (state) => {
      let noSelectOrg = state.selectedOrganizations.length === 0;
      let noSelectJobsType = state.selectedJobsTypes.length === 0;

      return state.jobs
        .filter((job) => {
          if (noSelectOrg) return true;
          return state.selectedOrganizations.includes(job.organization);
        })
        .filter((job) => {
          if (noSelectJobsType) return true;
          return state.selectedJobsTypes.includes(job.jobType);
        });
    }
  },
  actions: {
    async getJobs() {
      let response = await axios.get(`${baseURL}/jobs`);
      return (this.jobs = response.data);
    },

    addOrganization(organizations) {
      this.selectedOrganizations = organizations;
    },
    addJobsTypes(Jobs) {
      this.selectedJobsTypes = Jobs;
    }
  }
});
