'use client'
import React from 'react'
import { motion } from 'framer-motion'
const page = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 100 }}
        transition={{
          delay: 1.5,
          duration: 1,
          type: 'spring',
          stiffness: 1000
        }}
        className="h-20 w-20 bg-red-500 justify-center flex"
      >
        123
      </motion.div>
    </div>
  )
}

export default page
