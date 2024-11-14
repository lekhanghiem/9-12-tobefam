import React from 'react'
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { useTranslations } from "next-intl";


const Item = styled(Paper)(({ theme }) => ({
    height:"453px",
    borderRadius:"30px",
  backgroundColor: 'rgba(6, 100, 153, 0.3)',
boxShadow: '0px 4px 4px rgba(42, 252, 255, 0.25)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Swiper1 = () => {
    const t = useTranslations('All');

    const solutions = [
  {
    imageSrc: "/images/SOLUTION/setting.png",
    title: "The process is based on the roles of units and types of food",
    description: "For BLOCKCHAIN FARM",
  },
  {
    imageSrc: "/images/SOLUTION/expand.png",
    title: "Large-scale data",
    description: "Transportation transactions",
  },
  {
    imageSrc: "/images/SOLUTION/wifi.png",
    title: "Offline connection",
    description: "The app uses the phone's camera",
  },
  {
    imageSrc: "/images/SOLUTION/environment.png",
    title: "Suitable for developing countries",
    description: "BLOCKCHAIN FARM requires no special phone configuration",
  },
  {
    imageSrc: "/images/SOLUTION/customer.png",
    title: "Multi-language support",
    description: "Currently, 3 languages ​​are integrated",
  },
  {
    imageSrc: "/images/SOLUTION/language.png",
    title: "Management of identification materials",
    description: "The function of ordering and managing traceable material inventory",
  },
];
    return (
        <div className=' text-white relative py-10 container mx-auto'>
            <div className='w-11/12 mx-auto'>
      <Grid container spacing={5} columns={12} >
         {solutions.map((solution, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <Item>
             <div
          key={index}
          className="w-10/12 h-full py-10 mx-auto rounded-3xl bg-customBlue shadow-custom relative"
        >
          <div className="justify-center flex py-1">
            <div>
              <div>
                <Image src={solution.imageSrc} alt="" width={80} height={75} />
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-white text-3xl leading-10  py-5 font-bold">
              {t(solution.title)}
            </div>
            <div className="text-white text-xl leading-8">
              {t(solution.description)}

            </div>
          </div>
        </div>
          </Item>
        </Grid>
      ))}

      </Grid>
    </div>

        </div>
    )
}

export default Swiper1
