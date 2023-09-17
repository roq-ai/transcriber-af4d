import axios from 'axios';
import queryString from 'query-string';
import { AdditionalServiceInterface, AdditionalServiceGetQueryInterface } from 'interfaces/additional-service';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAdditionalServices = async (
  query?: AdditionalServiceGetQueryInterface,
): Promise<PaginatedInterface<AdditionalServiceInterface>> => {
  const response = await axios.get('/api/additional-services', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAdditionalService = async (additionalService: AdditionalServiceInterface) => {
  const response = await axios.post('/api/additional-services', additionalService);
  return response.data;
};

export const updateAdditionalServiceById = async (id: string, additionalService: AdditionalServiceInterface) => {
  const response = await axios.put(`/api/additional-services/${id}`, additionalService);
  return response.data;
};

export const getAdditionalServiceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/additional-services/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAdditionalServiceById = async (id: string) => {
  const response = await axios.delete(`/api/additional-services/${id}`);
  return response.data;
};
