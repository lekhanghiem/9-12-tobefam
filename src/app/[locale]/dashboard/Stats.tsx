import { AvatarGroup, Avatar } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  height:'200px',
  boxShadow:'none',
  borderRadius:'20px',
    padding: theme.spacing(1),
  ...theme.typography.body2,
  textAlign: 'center',
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Stats = () => {
  const items = [
    {
      src:'/img/dashboard/Group1.svg',
      title: 'Total Customers',
      count: '5,423',
      change: '18% this month',
      icon:<ArrowUpwardIcon/>,
      positive: true
    },
    {
      src:'/img/dashboard/Group1.svg',
      title: 'Members',
      count: '1,893',
      change: '1% this month',
      icon:<ArrowDownwardIcon/>,
      positive: false
    },
    {
      src:'/img/dashboard/Group1.svg',
      title: 'Active Now',
      count: '189',
      avatars: [
        { src: '/img/dashboard/user.png' },
        { src: '/img/dashboard/user.png' },
        { src: '/img/dashboard/user.png' }
      ]
    }
  ];

  return (
    <div className='py-10 '>
      <Box sx={{ flexGrow: 1 ,width:'90%',mx:'auto',background:'white',borderRadius:'40px', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)'}}>
      <Grid container spacing={1}>
        {items.map((stat, index) => (
           <Grid item xs={12} md={4}  key={index}>
          <Item>
        <div className="">
         <div className='flex gap-10'>
           <div>
            <Image
                    src={stat.src}
                    alt={`Avatar `}
                    width={80}
                    height={80}
                  />
          </div>
        <div className='flex flex-col'>
            <p className="text-sm text-gray-500">{stat.title}</p>
          <h3 className="text-4xl font-bold mt-2">{stat.count}</h3>


          {stat.avatars ? (
            <AvatarGroup max={4} total={5}>
              {stat.avatars.map((avatar, i) => (
                <Avatar key={i}>
                  <Image
                    src={avatar.src}
                    alt={`Avatar ${i + 1}`}
                    width={40}
                    height={40}
                  />
                </Avatar>
              ))}
            </AvatarGroup>
          ) : (
            <div className={`flex mt-2 ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
             <div>
              {stat.icon}
              </div>
               <p
              className=''
            >
              {stat.change}
            </p>
            </div>
          )}
        </div>
          </div>
         </div>
        </Item>
        </Grid>
      ))}


      </Grid>
    </Box>
      <div className="grid grid-cols-3 gap-6 mt-10">

    </div>
    </div>
  );
};

export default Stats;
