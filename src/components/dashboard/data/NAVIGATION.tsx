import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type { Router, Navigation } from '@toolpad/core';
import { FcCustomerSupport } from "react-icons/fc";
import { RiCustomerServiceLine } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaGoogleWallet } from "react-icons/fa6";
export const NAVIGATION: Navigation = [
  // {
  //   kind: 'header',
  //   title: 'Main items',
  // },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'Product',
    title: 'Product',
    icon: <ShoppingCartIcon />,
     children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
{
    segment: 'Customers',
    title: 'Customers',
    icon: <RiCustomerServiceLine   />,
     children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },{
    segment: 'Income',
    title: 'Income',
    icon: <FaGoogleWallet />,
     children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },{
    segment: 'Promote',
    title: 'Promote',
    icon: <ShoppingCartIcon />,
     children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <CiDiscount1 />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },{
    segment: 'Help',
    title: 'Help',
    icon: <BiMessageRoundedDots />,
     children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
];