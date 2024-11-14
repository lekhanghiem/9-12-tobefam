import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Paper, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const Item = styled(Paper)(({ theme }) => ({
        height: '500px',
 boxShadow: '0px 4px rgba(42, 252, 255, 0.25)',
 borderRadius: '30px',
  backgroundColor: 'rgba(6, 100, 153, 0.3)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Benefit = () => {
  const t = useTranslations('All');

        const benefitsData = [
    {
        imageSrc: "/images/BENEFIT/banking.png",
        title: "Support for State management",
        description: 'Government agencies have'
    },
    {
        imageSrc: "/images/BENEFIT/performance.png",
        title: "Increase consumer confidence",
        description: 'According to statistics'
    },
    {
        imageSrc: "/images/BENEFIT/international.png",
        title: "Support export businesses",
        description:'Most importing countries have introduced regulations on traceability'
    },
    {
        imageSrc: "/images/BENEFIT/diet.png",
        title: "Prevent food fraud",
        description:'Governments, corporations and food companies'
    },
    {
        imageSrc: "/images/BENEFIT/protection.png",
        title: "Trademark Protection",
        description:'Removing the space after the word'
    },
    {
        imageSrc: "/images/BENEFIT/deliveryservice.png",
        title: "Reduce product recall time during an epidemic",
        description:'BLOCKCHAIN FARM can shorten the process of finding'
    }
];
    return (
        <div className='relative'>
            <div className="absolute">
                <Image
                    src="/images/BENEFIT/168.png"
                    alt=""
                    width={541}
                    height={602}
                    className="w-full h-full"
                    loading="lazy"
                />
            </div>

            <div className='absolute right-0 bottom-60'>
                <Image
                    src="/images/BENEFIT/171.png"
                    alt=""
                    width={1000}
                    height={780}
                    className="w-full h-full"
                    loading="lazy"
                />
            </div>
 <div className='w-11/12 mx-auto py-20'>
      <Grid container spacing={8}>
        {benefitsData.map((benefit, index) => (
          <Grid  size={{ xs: 12, md: 6 }} key={index}>
            <Item>
              <Box display="flex" justifyContent="center" pt={5}>
                <Image
                  src={benefit.imageSrc}
                  alt={benefit.title}
                  width={120}
                  height={120}
                  loading="lazy"
                />
              </Box>
              <div className=' w-8/12 mx-auto' >
                <Typography variant="h4" color="white" fontWeight="bold" py={2} >
                   {t(benefit.title)}
                </Typography>
<Typography variant="h6" color="white" >
                   {t(benefit.description)}
                </Typography>
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>

        </div>
    );
};

export default Benefit;
