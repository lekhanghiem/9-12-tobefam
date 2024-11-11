import Image from 'next/image';
import React from 'react';

const FoodTraceability = () => {
  return (
    <div>
      <div className="  relative h-full">
        <Image
          className="absolute right-0 w-6/12 h-full "
          src="/images/HOME/bgRightFood.png"
          alt=""
          width={1395}
          height={5000000}
        />
        <div className=" w-full  h-full  mx-auto">
          <div className="  w-6/12 text-white pl-5 py-10">
            <p className="py-3 font-bold text-4xl  leading-9">
              TE-FOOD is a Food Traceability System from Farm to Table that aims
              to:
            </p>
            <hr className="bg-[#02e09b] py-1 w-9/12 rounded-full" />
            <div className="w-12/12  ">
              <ol className=" text-xl flex flex-col gap-3 ">
                <li className=" leading-6 pt-6">
                  1. Support food supply chains to operate more efficiently and
                  transparently,
                </li>
                <li className=" leading-6">
                  2. Support exporters to meet the regulatory requirements of
                  importing countries,
                </li>
                <li className=" leading-6">
                  3. Building, promoting and protecting brands,
                </li>
                <li className=" leading-6">
                  4. Prevent and minimize the impact of epidemics, fake and
                  dirty foods,
                </li>
                <li className=" leading-6">5. Increase consumer confidence,</li>
                <li className=" leading-6">
                  6. Support state management, balance supply and demand, and
                  prevent epidemics.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodTraceability;
