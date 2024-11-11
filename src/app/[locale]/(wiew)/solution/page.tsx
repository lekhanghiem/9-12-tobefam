"use client"
import React from 'react'
import Banner from '../../components/Page/solution/Banner'
import Revolution from '../../components/Page/solution//Revolution'
import Funtions from '../../components/Page/solution//Funtions'
import Identification from '../../components/Page/solution//Identification'
import Youwant from '../../components/Page/solution//Youwant'
import Mobile from '../../components/Page/solution//Mobile'
import Swipper1 from '../../components/Page/solution//Swipper1'
import Implementation from '../../components/Page/solution//Implementation'
import Blockchian from '../../components/Page/solution//Blockchian'
import Livestock from '../../components/Page/solution//Livestock'
import Tefood from '../../components/Page/solution//Tefood'
import Thisnew from '../../components/Page/solution//Thisnew'
import Theblockchian from '../../components/Page/solution//Theblockchian'
import Preferential from '../../components/Page/solution//Preferential';
import Blockchianfram from '../../components/Page/solution//Blockchianfram';
import Coldchian from '../../components/Page/solution//Coldchian';


const page = () => {
  return (
    <div>
      <div className="bg-[#012133]  ">
        <Banner />
        <Revolution />
        <Funtions />
        <Identification />
        <Youwant />
        <Mobile />
        <div className="py-10">
          <Swipper1 />
        </div>
        <Implementation />
        <Blockchian />
        <Livestock />
        <Tefood />
        <Thisnew />
        <Theblockchian />
        <Preferential />
        <Blockchianfram />
        <Coldchian/>
      </div>
    </div>
  );
}

export default page
