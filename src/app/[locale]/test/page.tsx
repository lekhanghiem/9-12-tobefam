'use client'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import { motion } from 'framer-motion'
import { IconButton } from '@mui/material'
import { IoMenu } from 'react-icons/io5'
import { MdOutlineMenuOpen } from 'react-icons/md'
const Page = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }
  const [dropdownState, setDropdownState] = useState<{
    [key: string]: boolean
  }>({})

  const path = usePathname()
  const locale = useLocale()
  const t = useTranslations('All')
  const [isHovered, setIsHovered] = useState(false)
  const handleClick = (label: string) => {
    setDropdownState(prev => ({
      ...prev,
      [label]: !prev[label] // Toggle visibility (true/false)
    }))
  }
  const Items = [
    { label: 'HOME', path: '/' },
    { label: 'BENEFIT', path: '/benefit' },
    { label: 'SOLUTION', path: '/solution' },
    {
      label: 'FOR CONSUMERS',
      path: '#',
      submenu: [
        { label: 'Seek an origin', path: '/seek' },
        { label: 'Consumer phone application', path: '#' },
        { label: 'Point of sale', path: '#' },
        { label: 'Privacy Policy', path: '#' }
      ]
    },
    { label: 'ABOUT US', path: '#' },
    { label: 'NEWS', path: '#' },
    { label: 'CONTACT', path: '#' }
  ]
  return (
    <div className="h-[1000px]">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
      >
        {mobileOpen ? (
          <MdOutlineMenuOpen fontSize={50} />
        ) : (
          <IoMenu fontSize={50} />
        )}
      </IconButton>
    </div>
  )
}

export default Page
