import * as yup from 'yup';

export const videoValidationSchema = yup.object().shape({
  title: yup.string().required(),
  duration: yup.number().integer().required(),
  organization_id: yup.string().nullable().required(),
});
