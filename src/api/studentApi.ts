import { ListResponse } from 'models/common';
import { Student } from 'models/student';
import axiosClient from './axiosClient';

const studentApi = {
  getAll(_limit = 10, _page: number): Promise<ListResponse<Student>> {
    const url = `/students`;

    return axiosClient.get(url, {
      params: {
        _limit,
        _page,
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
