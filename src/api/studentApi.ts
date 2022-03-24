import { ListParams, ListResponse } from 'models/common';
import { Student } from 'models/student';
import axiosClient from './axiosClient';

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = `/students`;

    return axiosClient.get(url, {
      params: {
        ...params,
      },
    });
  },

  getById(id: string): Promise<Student> {
    const url = `/students/${id}`;

    return axiosClient.get(url);
  },

  addStudent(data: Student): Promise<Student> {
    const url = `/students`;

    return axiosClient.post(url, data);
  },

  updateStudent(data: Student): Promise<Student> {
    const url = `/students`;

    return axiosClient.patch(url, data);
  },

  deleteStudent(id: string): Promise<Student> {
    const url = `/students/${id}`;

    return axiosClient.delete(url);
  },
};

export default studentApi;
