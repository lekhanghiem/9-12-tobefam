import { headerProps } from "@/types/types";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";

const Banner = ({ headerData }: { headerData: headerProps }) => {
  return (
    <section className="w-full max-h-[541px] bg-BG">
      {/* <div className="section-pb bg-[url('/images/bannerbg1.png')] bg-no-repeat bg-cover bg-center"> */}
      <div className="section-pb bg-gradient-footer ">
        <div className="container flex flex-col justify-center items-center lg:pt-40 md:pt-[200px] sm:pt-[200px] pt-32">
          <FadeUp>
            <h2 className="banner-title leading-normal lg:max-w-4xl text-center bg-gradient-to-r bg-clip-text from-[#F40074] via-[#921CF5] to-[#F40074] text-transparent lg:pb-6 md:pb-5 sm:pb-4 pb-3.5">
              {headerData?.title}
            </h2>
          </FadeUp>
          <FadeDown>
            <p className="my-text-16 text-center text-primary-0 max-w-[636px]">
              {headerData?.description}
            </p>
          </FadeDown>
        </div>
      </div>
    </section>
  );
};

export default Banner;
