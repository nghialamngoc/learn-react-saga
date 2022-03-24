import { DashboardStatistics } from 'features/dashboard/dashboardSlice';
import { Student } from 'models/student';
import axiosClient from './axiosClient';

const dashboardApi = {
  getStatistics: async (): Promise<DashboardStatistics> => {
    const res: Promise<DashboardStatistics> = axiosClient.post('/login');
    return res;
  },

  getHeighestStudentList: async (): Promise<Student[]> => {
    const res: Promise<Student[]> = axiosClient.post('/login');
    return res;
  },

  getLowestStudentList: async (): Promise<Student[]> => {
    const res: Promise<Student[]> = axiosClient.post('/login');
    return res;
  },
};

export default dashboardApi;
