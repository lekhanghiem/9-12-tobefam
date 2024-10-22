// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { TextFieldProps } from '@mui/material/TextField';

// interface CustomTextFieldProps extends Omit<TextFieldProps, 'type'> {
//   showPasswordIcon?: boolean;
//   password?: string;
//   handlePasswordChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   handleClickShowPassword?: () => void;
//   handleMouseDownPassword?: (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => void;
//   showPassword?: boolean;
// }

// const CustomTextField: React.FC<CustomTextFieldProps> = () => {
//   return (
//     <TextField
//       sx={{
//         height: 50,
//         width: { lg: '100%' },
//         backgroundColor: 'white',
//         borderRadius: '0px 40px 40px 0px',
//         '& .MuiOutlinedInput-root': {
//           height: '100%',
//           borderRadius: '0px 40px 40px 0px', // Apply rounded corners to the border
//           '& fieldset': {
//             border: '2px solid gray', // Default border color
//             borderRadius: '0px 40px 40px 0px',
//           },
//         },
//         '&:hover .MuiOutlinedInput-root': {
//           '& fieldset': {
//             borderColor: 'gray', // Border color on hover
//           },
//         },
//         '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
//           borderColor: 'black', // Border color when focused
//         },

//       }}
//       id="outlined-adornment-password"
//       label=""
//       variant="outlined"
//     />
//   );
// };

// export default CustomTextField;
