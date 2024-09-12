"use client";

import { navMenu } from "@/constant/navbar";
import { MenuItem, SubMenuItem } from "@/types/types";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  IconArrowBigRightLinesFilled,
  IconChevronDown,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import {
  default as brandLogo,
  default as brandLogoLg,
} from "~/images/next.svg";
const NavBar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(null);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const xlUp = useMediaQuery(theme.breakpoints.up("lg"));

  const toggleHandle = (idx: any) => {
    if (toggle === idx) {
      setToggle(null);
    } else {
      setToggle(idx);
    }
  };

  const handleHover = (idx: any) => {
    toggleHandle(idx);
  };

  const isMenuActive = (menu: MenuItem) => {
    if (menu.isSubMenu && menu.subMenu) {
      return menu.subMenu.some((submenu) => pathname === submenu.link);
    }
  };

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!pathname.includes("dashboard") ? (
        <header
          id="header"
          className={`${
            scrolled
              ? "header-animation bg-BG-btn-main"
              : "absolute bg-BG-btn-main"
          } 
      ${pathname === "/" && " z-20"} w-full z-10
`}
        >
          <div className="w-full container relative ">
            <div
              className={` flex items-center justify-between gap-x-2 mx-auto md:py-4 py-3.5`}
            >
              {xlUp ? (
                <nav className="w-full xl:flex justify-between items-center text-black hidden text-semibold">
                  {/* Desktop Menu */}
                  <Link href="/">
                    <Image
                      width={240}
                      height={60}
                      src={brandLogo}
                      alt="coinx"
                    />
                  </Link>
                  <div>
                    <ul className="flex justify-center items-center gap-3 lg:gap-7">
                      {navMenu?.map((menu: any, idx: number) => (
                        <li
                          key={menu?.id}
                          onMouseEnter={() => handleHover(idx)}
                          onMouseLeave={() => handleHover(idx)}
                          className={`${
                            isMenuActive(menu)
                              ? "text-primary-1"
                              : "text-primary-0"
                          } hover:cursor-pointer  font-bold leading-[130%] hover:text-primary-1 flex justify-center items-center group relative`}
                        >
                          {menu?.isSubMenu ? (
                            <>
                              <span className=" btn-linebar-effect">
                                {menu?.name}
                              </span>
                              <IconChevronDown
                                className={`sm:w-6 sm:h-6 w-5 h-5 ml-1.5 hover:rotate-180 duration-700 ease-in-out text-2xl ${
                                  toggle === idx ? "rotate-180" : "rotate-0"
                                }`}
                              />
                            </>
                          ) : (
                            <Link href={menu?.link}>
                              <span className=" btn-linebar-effect">
                                {menu?.name}
                              </span>
                            </Link>
                          )}
                          {menu?.isSubMenu && (
                            <ul
                              className={`shadow w-96 z-[300] bg-BG opacity-0 invisible group-hover:visible group-hover:opacity-100 absolute top-7 left-0 my-transition ease-out duration-300 ${
                                toggle === idx
                                  ? "translate-y-0"
                                  : "translate-y-8"
                              } p-5 flex flex-col justify-start items-start gap-4 rounded-lg group`}
                            >
                              {menu?.subMenu?.map((submenu: SubMenuItem) => (
                                <li
                                  key={submenu?.id}
                                  className={`group/item text-primary-0 font-bold leading-[130%] hover:primary-11 w-full duration-300`}
                                >
                                  <Link
                                    className="text-xl font-semibold"
                                    href={submenu?.link}
                                    target={
                                      submenu?.id === 103.4 ||
                                      submenu?.id === 103.2 ||
                                      submenu?.id === 1032.2
                                        ? "_blank"
                                        : ""
                                    }
                                  >
                                    <div
                                      className={`${
                                        pathname === submenu?.link
                                          ? "border-primary-10"
                                          : "border-gray-300"
                                      } flex item-center justify-between gap-3 border group-hover/item:border-primary-10 p-3 rounded-md`}
                                    >
                                      <div className="flex item-start flex-col justify-start gap-1">
                                        {submenu?.name}
                                        <p className="text-xs font-medium">
                                          {submenu?.des}
                                        </p>
                                      </div>
                                      <IconArrowBigRightLinesFilled
                                        className={`sm:w-6 w-5 my-auto min-w-[24px] -translate-x-2 group-hover/item:translate-x-0 duration-300 ease-in-out text-2xl`}
                                      />
                                    </div>
                                  </Link>{" "}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center flex-wrap gap-5 font-inter text-white text-lg font-medium md:leading-[25px] leading-6 relative">
                    <Link
                      href="/dashboard/overview"
                      className="my-transition text-center cursor-pointer py-[7px] sm:rounded-lg my-text-16 font-medium leading-[150%] text-white  text-base bg-gradient-button hover:bg-foundation-blue-60 !rounded-full px-6"
                    >
                      Dashboard
                    </Link>
                  </div>
                </nav>
              ) : (
                <nav className="w-full flex justify-between items-center text-black xl:hidden">
                  {/* Mobile Menu */}
                  <div className="relative">
                    <Link href="/" aria-label="logo_main">
                      <div className="flex gap-2 items-center">
                        <Image
                          width={190}
                          height={70}
                          src={brandLogo}
                          alt="nowblockchain"
                        />
                      </div>
                    </Link>
                    <div
                      className={`fixed overflow-y-scroll scrollbar scrollbar-sm top-0 left-0 bg-BG h-screen w-full  shadow-lg z-50 transform transition-transform ease-in-out duration-500 p-5 ${
                        hamburgerToggle
                          ? "translate-x-0 duration-500"
                          : "-translate-x-full duration-500"
                      } duration-500 flex justify-start items-start gap-8 flex-col`}
                    >
                      <div className="relative flex justify-between items-center w-full">
                        <Link
                          href="/"
                          onClick={() => setHamburgerToggle((prev) => !prev)}
                        >
                          <Image
                            width={250}
                            height={50}
                            src={brandLogoLg}
                            alt="nowblockchain"
                          />
                        </Link>
                        <IconX
                          className="text-2xl cursor-pointer hover:duration-200 text-primary-0 hover:text-primary-1"
                          onClick={() => setHamburgerToggle((prev) => !prev)}
                        />
                      </div>
                      <div className="w-full">
                        <ul className="flex flex-col justify-center items-start gap-5">
                          <Link href="/dashboard/overview">
                            <p className="text-primary-0 font-bold">
                              Dashboard
                            </p>
                          </Link>
                          {navMenu?.map((menu: any, idx) => (
                            <li
                              className={`w-full ${
                                (menu.name === "Services" || "Blogs") &&
                                isMenuActive(menu)
                                  ? "text-primary-1"
                                  : "text-primary-0"
                              }  hover:text-primary-1 hover:duration-700 font-bold leading-[130%] cursor-pointer duration-500 group relative active:bg-transparent focus:bg-transparent`}
                              key={menu.id}
                              onClick={() => handleHover(idx)}
                            >
                              {menu?.isSubMenu && (
                                <div className="flex justify-between w-full items-center">
                                  <p className="text-primary-0">
                                    {" "}
                                    {menu?.name}
                                  </p>
                                  {menu?.isSubMenu && (
                                    <IconChevronDown
                                      className={`sm:w-6 sm:h-6 w-5 h-5 sm:ml-2 ml-1.5 hover:rotate-180 duration-300 
                                 ${toggle === idx ? "rotate-180" : "rotate-0"}`}
                                    />
                                  )}
                                </div>
                              )}
                              <AnimateHeight
                                duration={500}
                                height={toggle === idx ? "auto" : 0}
                              >
                                <ul className={`pt-2`}>
                                  {menu?.subMenu?.map(
                                    (subItem: SubMenuItem, j: number) => (
                                      <Link
                                        href={subItem?.link}
                                        aria-label="item"
                                        target={
                                          subItem?.id === 103.4 ||
                                          subItem?.id === 103.2 ||
                                          subItem?.id === 1032.2
                                            ? "_blank"
                                            : ""
                                        }
                                        key={j}
                                      >
                                        <li
                                          className="hover:text-primary-1 flex item-center justify-between gap-3 border-[#611048] px-3 mt-2 py-1.5 border rounded-md text-white hover:duration-700 font-bold leading-[130%]"
                                          onClick={() =>
                                            setHamburgerToggle((prev) => !prev)
                                          }
                                        >
                                          <div className="flex item-start flex-col justify-start gap-1">
                                            <span
                                              className={`${
                                                pathname === subItem?.link
                                                  ? "text-primary-1"
                                                  : "text-primary-0"
                                              } font-bold leading-[130%]`}
                                            >
                                              {subItem?.name}
                                            </span>
                                            {subItem?.des && (
                                              <p className="text-xs text-primary-0 font-medium">
                                                {subItem?.des}
                                              </p>
                                            )}
                                          </div>
                                          <IconArrowBigRightLinesFilled
                                            className={`w-4 my-auto min-w-[15px] text-primary-0 -translate-x-2 group-hover/item:translate-x-0 duration-300 ease-in-out text-2xl`}
                                          />
                                        </li>
                                      </Link>
                                    )
                                  )}
                                </ul>
                              </AnimateHeight>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center justify-between gap-2 md:gap-5">
                    {!hamburgerToggle && (
                      <IconMenu2
                        onClick={() => setHamburgerToggle((prev) => !prev)}
                        className="text-3xl cursor-pointer hover:duration-200 text-primary-0 hover:text-primary-1"
                      />
                    )}
                  </div>
                </nav>
              )}
            </div>
          </div>
        </header>
      ) : null}
    </>
  );
};

export default NavBar;
