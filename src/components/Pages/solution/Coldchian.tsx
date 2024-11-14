import React from 'react';
import { useTranslations } from "next-intl";

const Coldchian = () => {
  const t = useTranslations('All');
  return (
    <div className="h-full w-full text-white container mx-auto py-10">
      <div className="text-xl w-8/12 mx-auto leading-8 text-center font-bold">
        {t('coldChainTitle')}
      </div>
      <div className="text-xl  mx-auto w-10/12  leading-8">
        <div className="pt-5">
          {t('coldChainDescription')}
        </div>
        <div className="font-bold pt-5 ">
          {t('Who should use this service:')}
        </div>
        <div className="pt-3">
         {t('Manufacturing and commercial')}
        </div>
        <div className="font-bold py-3 ">
          {t('Service price:')}
        </div>
        <div className="">
          <div>
            {t('maintainAccounts')}
          </div>
          <div>
            {t('over20Accounts')}</div>
          <div>
            {t('measuringEquipmentService')}
          </div>
          <div>
          {t('equipmentRentalPrice')}
            </div>
        </div>
      </div>
      <div className="text-xl w-8/12 mx-auto leading-8 text-center py-5 font-bold">
       {t('​TRACKING INFORMATION PORTAL')}
      </div>
      <div className="text-xl  mx-auto w-10/12  leading-8">
        <div className="">
          {t('productRecallDescription')}
        </div>
        <div className="py-5">
          {t('productRecallDetails')}

        </div>
        <div className="">
          {t('recallInfo')}
        </div>
        <div className=" font-bold pt-5">
          {t('Who should use this service:')}
         </div>
        <div className="py-3">
          <div>
          {t('Food production and trade enterprises')}
           </div>
          <div>
          {t('Food safety management authorities')}
            </div>
          <div>

          {t('Trade management')}

          </div>
        </div>

        <div className="font-bold ">
          {t('Service cost:')}
         </div>
        <div className="pt-3">
          {t('serviceCost')}
         </div>
      </div>
      <div className="text-xl w-8/12 mx-auto leading-8 text-center  font-bold py-5">
          {t('foodSafetyTitle')}


      </div>
      <div className="text-xl  mx-auto w-10/12  leading-10">
        <div>
          {t('Do you need to ensure your products')}

        </div>
        <div >
         {t('BLOCKCHAIN FARM Blockchain will help you control')}

        </div>
        <div >
          {t('With the most modern')}

        </div>
        <div className="font-bold py-3">
          {t('whoShouldUse')}
          </div>
        <div>
          <div>
          {t('Food processing enterprises')}
            </div>
          <div>
          {t('- Pork and beef meat trading centers')}
            </div>
        </div>
        <div className="font-bold py-3 ">
          {t('servicePriceTitle')}
          </div>
        <div className=''>
          {t('Full service rental price')}
        </div>
      </div>

    </div>
  );
};

export default Coldchian;
