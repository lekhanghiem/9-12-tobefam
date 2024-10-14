'use client'
import { Box, Skeleton } from '@mui/material'
import React from 'react'
 const Loading = () => {
  return (
    <div>
    <Box sx={{ width: '100%', height: '400px' }}>
      <Skeleton variant="rectangular" width="100%" height="100%" />
    </Box>
  </div>
  )
}
export default Loading