import * as yup from 'yup';

export const paymentPlanValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price_per_hour: yup.number().integer().required(),
  max_hours: yup.number().integer().required(),
  organization_id: yup.string().nullable().required(),
});
