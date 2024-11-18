// FormRegister.js
'use client'
import React, { useState } from 'react'
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
  Box,
  Grid
} from '@mui/material'
import Image from 'next/image'

const FormRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
    printOption: 'auto'
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      quantity: '',
      printOption: 'auto'
    })
  }

  return (
    <Box sx={{ flexGrow: 1, py: 3 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Box>
            <Image
              src="/img/lienhe/Group48096600.png"
              alt="img"
              width={5000}
              height={5000}
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '90%',
              mx: 'auto',
              border: '1px solid #a7f3a4',
              borderRadius: 2,
              backgroundColor: '#f8f8f8'
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontWeight: 'bold',
                bgcolor: '#4a8f00',
                color: '#FFFFFF',
                py: '5px',
                borderRadius: '4px 4px 0 0'
              }}
            >
              THÔNG TIN ĐĂNG KÝ SỬ DỤNG TEM:
            </Typography>

            <form onSubmit={handleSubmit} className="p-10">
              <TextField
                label="Họ và tên"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Số điện thoại"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Số lượng tem cần sử dụng"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />

              <FormControl component="fieldset" sx={{ mt: 2 }}>
                <RadioGroup
                  name="printOption"
                  value={formData.printOption}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel
                    value="auto"
                    control={<Radio />}
                    label="Chủ động in"
                  />
                  <FormControlLabel
                    value="support"
                    control={<Radio />}
                    label="Cần hỗ trợ in"
                  />
                </RadioGroup>
              </FormControl>

              <Typography variant="body2" sx={{ mt: 2 }}>
                Sau khi tiếp nhận thông tin của quý khách sớm nhất có thể chúng
                tôi sẽ liên hệ với quý khách để tiến hành bước tiếp theo.
              </Typography>

              <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                >
                  Gửi yêu cầu
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  onClick={handleReset}
                >
                  Cập nhật lại thông tin
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FormRegister
