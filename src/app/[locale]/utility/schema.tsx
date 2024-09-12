import * as yup from "yup";

export const schemeBuyIDO = yup.object().shape({
  amount: yup.number().required("Amount is require"),
  symbol: yup
    .object()
    .shape({
      id: yup.number().required("Id is required"),
      ido: yup.boolean().required("Ido is required"),
      name: yup.string().required("Name is required"),
      price: yup.number().required("Price is required"),
      symbol: yup.string().required("Symbol is required"),
    })
    .required("Symbol is required")
    .typeError("Symbol is required"),
});

export const schemeContactUs = yup.object().shape({
  subject: yup
    .string()
    .max(200, "Maximum characters 200")
    .required("Subject is require"),
  message: yup
    .string()
    .max(1000, "Maximum characters 1000")
    .required("Message is requires"),
});

export const schemaAddress = yup.object().shape({
  address: yup.string().required("Address is required"),
});
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
export const schemaregister = yup.object({

  username: yup.string().min(6, 'Vui lòng nhập ít nhất 6 kí tự').required('Vui lòng nhập họ và tên'),
  email: yup.string().email('Vui lòng nhập đúng định dạng email').required('Vui lòng Nhập Email'),
  company_name: yup.string().min(6,'Nhập ít nhất 6 kí tự').required('Vui lòng nhập tên cong ty'),
   password: yup
     .string()
     .matches(passwordRules, { message: "Nhập ít nhất 6 ký tự và bao gồm ít nhất một chữ số, một chữ cái viết thường và một chữ cái viết hoa." }),
       confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Mật khẩu chưa trùng khớp')
    .required('Nhập lại mật khẩu'),

  role_id: yup.number().required('Vui lòng chọn loại tài khoản bạn muốn đăng ký ')
}).required('required');



export const schemalogin = yup.object({
  email: yup.string().email('Vui lòng nhập đúng định dạng Email').required('Vui lòng nhập Email'),
  password: yup.string().required('Vui lòng nhập Password').min(6, 'Password trên 6 kí tự').max(20, 'Password dưới 20 kí tự'),
}).required();





// Regex for phone number validation
export const phoneRegExp = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

// Validation schema
export const schemaedituser = yup.object({
  phone: yup.string().matches(phoneRegExp, 'Vui lòng nhập đúng số điện thoại'),
  email: yup.string().email('Vui lòng nhập đúng định dạng Email').required('Vui lòng nhập Email')
}).required();
