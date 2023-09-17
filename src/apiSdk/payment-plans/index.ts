import axios from 'axios';
import queryString from 'query-string';
import { PaymentPlanInterface, PaymentPlanGetQueryInterface } from 'interfaces/payment-plan';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPaymentPlans = async (
  query?: PaymentPlanGetQueryInterface,
): Promise<PaginatedInterface<PaymentPlanInterface>> => {
  const response = await axios.get('/api/payment-plans', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPaymentPlan = async (paymentPlan: PaymentPlanInterface) => {
  const response = await axios.post('/api/payment-plans', paymentPlan);
  return response.data;
};

export const updatePaymentPlanById = async (id: string, paymentPlan: PaymentPlanInterface) => {
  const response = await axios.put(`/api/payment-plans/${id}`, paymentPlan);
  return response.data;
};

export const getPaymentPlanById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/payment-plans/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePaymentPlanById = async (id: string) => {
  const response = await axios.delete(`/api/payment-plans/${id}`);
  return response.data;
};
