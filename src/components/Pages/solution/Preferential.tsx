import React from 'react';
import Grid from '@mui/material/Grid2';
import { useTranslations } from "next-intl";

const Preferential = () => {
  const t = useTranslations('All');
  const cardData = [
    { text:'provinceScale1' },
    { text:'provinceScale2' },
    { text:'provinceScale3' }
  ];
  return (
    <div className="h-full w-full text-white pt-10 container mx-auto">
      <div className="leading-8 text-2xl w-6/12 mx-auto text-center">
        {t('Preferential prices for state management')}
      </div>
        <div className='py-10 w-11/12 mx-auto' >
      <Grid container spacing={5}>
         {cardData.map((item, index) => (
        <Grid size={{ xs: 12, md: 4 }} key={index}>
          <div
          className="h-full mx-auto rounded-3xl  py-10 text-center bg-[#023552] shadow-[0_4px_4px_rgba(42,252,255,0.25)] "
        >
          <div className="text-xl leading-8   text-white w-10/12 mx-auto">
            {t(item.text)}
          </div>
        </div>
        </Grid>
      ))}
      </Grid>
    </div>

       <div className="w-10/12 mx-auto pt-10 pb-3 text-xl leading-8">
      <div className="text-2xl font-black">{t('serviceCosts')}</div>
      <div>{t('includes')}</div>
      <div>{t('licenseFees')}</div>
      <div>{t('smsCost')}</div>
      <div>{t('transmissionCosts')}</div>
      <div>{t('technicalSupport')}</div>
      <div>{t('controlData')}</div>
      <div>{t('freeTraining')}</div>
      <div>{t('onlineTraining')}</div>
      <div>{t('notIncluded')}</div>
      <div>{t('vat')}</div>
      <div>{t('travelExpenses')}</div>
    </div>
    </div>
  );
};

export default Preferential;
