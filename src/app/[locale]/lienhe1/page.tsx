import React from 'react';
import { Container, Typography, Box, Card, CardContent, TextField, Button } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Bảo Mật Nông Sản
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Card sx={{ width: '100%', padding: 2 }}>
          <CardContent>
            <Typography variant="h5">Truy xuất nguồn gốc</Typography>
            <Typography variant="body2">
              Thông tin về nguồn gốc và quy trình sản xuất nông sản.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', padding: 2 }}>
          <CardContent>
            <Typography variant="h5">Quản trị chuỗi cung ứng</Typography>
            <Typography variant="body2">
              Quản lý hiệu quả chuỗi cung ứng từ sản xuất đến tiêu thụ.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', padding: 2 }}>
          <CardContent>
            <Typography variant="h5">Quản trị vận tải sản xuất</Typography>
            <Typography variant="body2">
              Đảm bảo vận chuyển hàng hóa an toàn và hiệu quả.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', padding: 2 }}>
          <CardContent>
            <Typography variant="h5">Sàn thương mại điện tử</Typography>
            <Typography variant="body2">
              Nền tảng kết nối nhà sản xuất và người tiêu dùng.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box mt={4}>
        <Typography variant="h5" align="center">Liên hệ</Typography>
        <form>
          <TextField
            label="Họ và tên"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Nội dung"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Box textAlign="center" mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Gửi
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default App;