import { City } from 'models';
import { ListParams, ListResponse } from 'models/common';
import axiosClient from './axiosClient';

const cityApis = {
  getAll(params: ListParams): Promise<ListResponse<City>> {
    const url = `/cities`;

    return axiosClient.get(url, {
      params,
    });
  },
};

export default cityApis;
