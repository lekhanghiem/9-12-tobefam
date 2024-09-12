import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useSwiper } from "swiper/react";
function ButtonPrevSwiper() {
  const swiper = useSwiper();
  return (
    <div
      className="absolute top-[50%] -translate-y-[50%] left-0 z-[1]
                translate-x-[3px] bg-black shadow-gray w-9 h-9 rounded-full 
                justify-center items-center font-bold cursor-pointer hover:bg-[#303030] 
                transition duration-300 select-none hidden sm:flex"
      onClick={() => swiper.slidePrev()}
    >
      <GoArrowLeft size={23} color={"#fff"} />
    </div>
  );
}

export default ButtonPrevSwiper;
