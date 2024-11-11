
import TextField from '@mui/material/TextField';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';


type PasswordFieldProps = {
  label: string;
  register: any;
  error?: string;
};

 export const PasswordField = ({ label, register, error,  }: PasswordFieldProps) => (
  <div className="pt-3">
    <div className="text-2xl font-bold">
      {label} <span className="text-red-600">(*)</span>
    </div>
    <div className="pt-5">
      <Box>
        <TextField
          {...register}
          variant="outlined"
          fullWidth
          error={!!error}
          helperText={error || ''}
          sx={{
            '& .MuiInputLabel-root': { color: 'black' },
            '& .MuiOutlinedInput-root': {
              transition: '0.3s',
              '& fieldset': { borderColor: 'green' },
              '&:hover fieldset': {
                borderColor: 'green',
                boxShadow: '0 0 8px 2px rgba(0, 128, 0, 0.5)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'green',
                boxShadow: '0 0 8px 2px rgba(0, 128, 0, 0.7)',
              },
            },
            '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
          }}
        />
      </Box>
    </div>
  </div>
);