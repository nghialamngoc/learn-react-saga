import { City } from 'models';
import { ListResponse } from 'models/common';
import axiosClient from './axiosClient';

const cityApis = {
  getAll(_limit = 10, _page: number): Promise<ListResponse<City>> {
    const url = `/cities`;

    return axiosClient.get(url, {
      params: {
        _limit,
        _page,
      },
    });
  },
};

export default cityApis;
