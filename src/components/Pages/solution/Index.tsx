import React from 'react'
import Revolution from './Revolution'
import Funtions from './Funtions'
import Identification from './Identification'
import Youwant from './Youwant'
import Mobile from './Mobile'
import Swipper1 from './Swipper1'
import Implementation from './Implementation'
import Blockchian from './Blockchian'
import Livestock from './Livestock'
import Tefood from './Tefood'
import Thisnew from './Thisnew'
import Theblockchian from './Theblockchian'
import Preferential from './Preferential'
import Banner from './Banner'
import Coldchian from './Coldchian'
import Blockchianfram from './Blockchianfram'
import BlockChainFarm from './BlockChainFarm'


const Index = () => {
  return (
    <div>
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
<BlockChainFarm/>

        <Blockchianfram />
        <Coldchian/>
    </div>
  )
}

export default Index