'use client'
import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <motion.button
        animate={{ x: [0, 100, 0, 500, 0, -200] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          times: [0, 0.1, 0.3, 0.4, 0.6, 1]
        }}
        className="bg-green-400 py-3 px-5"
      >
        123123123123
      </motion.button>
    </div>
  )
}

export default page
