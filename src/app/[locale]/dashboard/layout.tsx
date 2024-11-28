'use client'
import MenuIcon from '@mui/icons-material/Menu'
import CustomMenuItems from './CustomMenu'
import React from 'react'
import {
  FaHome,
  FaProductHunt,
  FaUsers,
  FaChartLine,
  FaBullhorn,
  FaQuestionCircle
} from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Stats from './Stats'
import SettingsIcon from '@mui/icons-material/Settings'
import ListArea from '@/components/Pages/farm/ListArea'
import {
  Account,
  AuthenticationContext,
  SessionContext,
  Session
} from '@toolpad/core'

const demoSession = {
  user: {
    name: 'Bharat Kashyap',
    email: 'bharatkashyap@outlook.com',
    image: 'https://avatars.githubusercontent.com/u/19550456'
  }
}

const Dashboard = () => {
  const [session, setSession] = React.useState<Session | null>(demoSession)
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession)
      },
      signOut: () => {
        setSession(null)
      }
    }
  }, [])
  const [isOpen, setIsOpen] = React.useState(true)

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="flex h-full bg-gray-100">
      <aside
        className={`h-screen   bg-white ${isOpen === true ? 'w-[300px]' : 'w-[75px]'}`}
      >
        <div className="flex items-center justify-between w-full   px-4 py-5 rounded-lg transition">
          <div className="flex items-center  px-5">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'block' } }}
            >
              <SettingsIcon style={{ fontSize: '25px' }} />
            </IconButton>
            <span
              className={`text-4xl font-bold ${isOpen === true ? 'opacity-100' : 'opacity-0'}`}
            >
              Dashboard{' '}
              <span
                className={`text-sm text-gray-400 pt-5 ${isOpen === true ? 'opacity-100' : 'opacity-0'}`}
              >
                {' '}
                v.01
              </span>
            </span>
          </div>
        </div>
        <Divider />

        <nav className="mt-6  px-5">
          {[
            {
              name: 'Dashboard',
              icon: <FaHome />,
              iconArrow: <KeyboardArrowDownIcon />
            },
            {
              name: 'Product',
              icon: <FaProductHunt />,
              iconArrow: <KeyboardArrowDownIcon />
            },
            {
              name: 'Customers',
              icon: <FaUsers />,
              iconArrow: <KeyboardArrowDownIcon />
            },
            {
              name: 'Income',
              icon: <FaChartLine />,
              iconArrow: <KeyboardArrowDownIcon />
            },
            {
              name: 'Promote',
              icon: <FaBullhorn />,
              iconArrow: <KeyboardArrowDownIcon />
            },
            {
              name: 'Help',
              icon: <FaQuestionCircle />,
              iconArrow: <KeyboardArrowDownIcon />
            }
          ].map((item, index) => (
            <button
              key={index}
              className="flex items-center justify-between w-full mx-auto px-4 py-5 bg-white text-gray-600 rounded-lg hover:text-white hover:bg-purple-600 transition"
            >
              <div className="flex items-center  gap-3 text-2xl">
                {item.icon}
                <span
                  className={`text-xl font-medium ${isOpen === true ? 'opacity-100' : 'opacity-0'}`}
                >
                  {item.name}
                </span>
              </div>
              <div
                className={`flex items-center text-2xl font-medium ${isOpen === true ? 'opacity-100' : 'opacity-0'}`}
              >
                {item.iconArrow}
              </div>
            </button>
          ))}
        </nav>
        <div className="pt-40">
          <div className="px-3">
            <div
              className={`  ${isOpen === true ? 'opacity-100' : 'opacity-0'}`}
            >
              <Box
                sx={{
                  borderRadius: '20px',
                  background:
                    'linear-gradient(107.91deg, #EAABF0 7.37%, #4623E9 95.19%)',
                  height: '150px',
                  width: '95%',
                  mx: 'auto'
                }}
              >
                <div className="flex justify-center items-center pt-10">
                  <div className="text-center">
                    <div className="font-bold text-white">
                      Upgrade to PRO to get access to all Features!
                    </div>
                    <div className="pt-10">
                      <Button
                        sx={{
                          background: 'white',
                          width: '80%',
                          borderRadius: '20px'
                        }}
                      >
                        Get Pro Now!
                      </Button>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
            <div className="pt-10">
              <AuthenticationContext.Provider value={authentication}>
                <SessionContext.Provider value={session}>
                  <div
                    className={`flex ${isOpen === true ? 'justify-center' : 'justify-start'}`}
                  >
                    <Account slots={{}} />
                  </div>
                </SessionContext.Provider>
              </AuthenticationContext.Provider>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-10  h-[100%] py-5">
        <header className="flex justify-between items-center pt-5">
          <h2 className="text-3xl font-bold">Hello Evano 👋</h2>
          <div className="relative">
            <AiOutlineSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
        </header>
        <Stats />
        <ListArea />
      </main>
    </div>
  )
}

export default Dashboard
