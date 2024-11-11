import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollToTop from './ScrollToTop';

const footer = () => {
  const socialMediaIcons = [
    {
      src: '/images/HOME/icontelegram.png',
      alt: 'Telegram',
      width: 35,
      height: 23,
    },
    {
      src: '/images/HOME/icontiwter.png',
      alt: 'Twitter',
      width: 35,
      height: 23,
    },
    {
      src: '/images/HOME/iconfacebook.png',
      alt: 'Facebook',
      width: 35,
      height: 23,
    },
    {
      src: '/images/HOME/iconinstagram.png',
      alt: 'Instagram',
      width: 35,
      height: 23,
    },
  ];
  return (
    <div className="w-full h-full bg-[#012133]  ">
      <div className=" ">
        <div className=" w-full pt-20">
          <div className="grid  md:grid-cols-4  grid-cols-2 px-2 gap-5">
            <div className="flex flex-col basis-1/4">
              <div className="flex justify-center  py-2">
                <Image
                  src="/images/HOME/logo.png"
                  alt=""
                  width={287}
                  height={53}
                  className=""
                />
              </div>
              <Link
                href=" "
                className="no-underline py-2 pt-5 text-center hover:text-blue-500 text-xl text-[#97c7ff] "
              >
                New agricultural solutions for you
              </Link>
            </div>
            <div className="flex flex-col basis-1/4">
              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-xl text-[#97c7ff] "
                href="#"
              >
                Contact Us
              </Link>
              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-xl text-[#97c7ff] "
                href="#"
              >
                Company
              </Link>

              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-xl text-[#97c7ff] "
                href="#"
              >
                About Us
              </Link>

              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-xl text-[#97c7ff] "
                href="#"
              >
                Blog
              </Link>
            </div>
            <div className="flex flex-col basis-1/4">
              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-xl text-[#97c7ff] "
                href="#"
              >
                Support
              </Link>
              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-xl text-[#97c7ff] "
                href="#"
              >
                FAQ
              </Link>
            </div>
            <div className="flex flex-col basis-1/4">
              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-xl text-[#97c7ff]"
                href="#"
              >
                Terms of use
              </Link>
              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-xl text-[#97c7ff] "
                href="#"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="py-5 ">
          <div className="bg-gradient-to-r h-1 from-[#2affff] to-[#73fa71] to-[#02ffac] w-full  pt-1" />
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between py-5  lg:px-20 px-3">
          <div className="text-white text-xl flex justify-end">
            &copy; 2024 John Doe
          </div>
          <div className="">
            <div className="flex justify-end gap-4 lg:pt-0 pt-4">
              {socialMediaIcons.map((icon, index) => (
                <div key={index}>
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-4 right-4 absolute">
        <ScrollToTop />
      </div>
    </div>
  );
};

export default footer;
