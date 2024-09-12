// validate.js
import * as yup from 'yup';

export const validate = yup.object().shape({
  email: yup.string().email('loi email').required('Email is plesse'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(10)
    .required('Password is plesse'),
});
