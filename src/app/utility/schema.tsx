import * as yup from "yup";
interface FileWithProperties {
  size: number;
  type: string;
}
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



export const phoneRegExp = /^(?:\+84|0)(?:\d{9}|\d{8})$/;

export const schemaEditUser = yup.object({
  phone: yup
    .string()
    .matches(phoneRegExp, 'Vui lòng nhập đúng số điện thoại')
    .required('Vui lòng nhập số điện thoại'), // Bắt buộc
  email: yup
    .string()
    .email('Vui lòng nhập đúng định dạng Email')
    .required('Vui lòng nhập Email'),
}).required();



export const ChangePassword = yup.object({
  old_password: yup
     .string()
     .matches(passwordRules, { message: "Nhập ít nhất 6 ký tự và bao gồm ít nhất một chữ số, một chữ cái viết thường và một chữ cái viết hoa." }),
   new_password: yup
     .string()
     .matches(passwordRules, { message: "Nhập ít nhất 6 ký tự và bao gồm ít nhất một chữ số, một chữ cái viết thường và một chữ cái viết hoa." }),
       re_new_password: yup.string()
    .oneOf([yup.ref('new_password')], 'Mật khẩu chưa trùng khớp')
    .required('Nhập lại mật khẩu'),

}).required();

export const EditCompany = yup.object().shape({
  Company_name: yup.string().min(6,'Nhập ít nhất 6 kí tự').required('Vui lòng nhập tên công ty.'),
  district_code: yup.string().required('Vui lòng nhập mã quận.'),
  wards_code: yup.string().required('Vui lòng nhập mã phường.'),
  provinces_code: yup.string().required('Vui lòng nhập mã tỉnh.'),
  description: yup.string().required('Vui lòng nhập Nhập mô tả.'),
  Address: yup.string().required('Vui lòng nhập địa chỉ.'),
});

// Create Farm Schema
export const CreateFarm = yup.object().shape({
  Name: yup.string().required('Vui lòng nhập tên.'),
  Address: yup.string().required('Vui lòng nhập địa chỉ.'),
  description: yup.string().required('Vui lòng nhập mô tả.'),
  Area_type: yup.string().required('Vui lòng nhập loại khu vực.'),
  Image: yup.mixed()
    .required('Vui lòng chọn ảnh.')
    ,
});



export const schemmaVerify = yup.object().shape({
  code: yup
    .string()
    .length(6, "Mã phải có 6 chữ số")
    .required("Mã là bắt buộc"),
});