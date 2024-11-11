
import FoodTraceability from "@/components/Page/Home/FoodTraceability";
import Banner from "@/components/Page/Home/Banner";
import WhatWeDo from "@/components/Page/Home/WhatWeDo";
import Comprehensive from "@/components/Page/Home/Comprehensive";
import Factors from "@/components/Page/Home/Factors";
import WhatCanYou from "@/components/Page/Home/WhatCanYou";
import WeAreWith from "@/components/Page/Home/WeAreWith";

const HomePage = () => {  
  return (
    <div className="bg-[#012133]">
      <div
      className="  " > 
      <Banner />
      <FoodTraceability />
      <WhatWeDo />
      <Comprehensive />
      <Factors />
      <WhatCanYou />z
      <WeAreWith />
    
    </div>
    </div>
  );
};

export default HomePage;
