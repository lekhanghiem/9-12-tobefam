import React from 'react'
import { useTranslations } from "next-intl";

const Blockchianfram = () => {
  const t = useTranslations('All');
  return (
    <div className="h-full w-full text-white py-10 container mx-auto">
      <div className="text-xl w-8/12 mx-auto leading-8 text-center font-bold">
        {t('​TRACKING INFORMATION PORTAL')}
      </div>
      <div className="text-xl gap-y-10 mx-auto w-10/12 pt-10 leading-8">
        <div>
         {t('The portal is the place to collect traceability information about')}
        </div>
        <div className="py-5">
         {t('The data will be processed according')}
        </div>
        <div className="font-bold">
          {t('Other available systems can')}
        </div>
             <div>{t('coldChainManagement')}</div>
      <div>{t('productRecall')}</div>
      <div>{t('supplyDemandSystem')}</div>
      <div>{t('foodSafetyControl')}</div>
      <div>{t('herdDiseaseManagement')}</div>
      <div>{t('traceabilitySystem')}</div>
      <div className="py-5">{t('systemData')}</div>
      <div className="font-bold">{t('whoShouldUse')}</div>
      <div className="py-3">{t('retailCorporations')}</div>
      <div>{t('areaManagers')}</div>
      <div className="font-bold pt-3">{t('rentalPriceTitle')}</div>
      <div className="font-bold py-4">{t('rentalDescription')}</div>
      <div className="pt-3">{t('basicPackage')}</div>
      <div>{t('specialPackage')}</div>
      <div>{t('contactInfo')}</div>
    </div>

    </div>
  );
}

export default Blockchianfram