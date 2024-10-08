"use client";
import { styled } from "@mui/material/styles";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import TopNav from "@/components/Global/layout/top-nav";
// import SideNav from "@/components/Global/layout/side-nav";
import auth from "@/app/[locale]/utility/auth";
// import TopNav from "./top-nav";

const SIDE_NAV_WIDTH = 340;

const LayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
}));

const LayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
  position: "relative",
});

function LayoutDashboard({ children }: any) {
  const pathname = usePathname();

  const [openNav, setOpenNav] = useState(false);
  const user = auth();
  useEffect(() => {
    setOpenNav(false);
  }, [pathname]);
if(!user) return
  return (
    <>
      <div className="bg-[url('/images/bgLayout.png')]  bg-no-repeat bg-cover bg-center">
        <div className="overflow-hidden h-20">
          <TopNav onNavOpen={() => setOpenNav(true)} />
        </div>
        <div className="flex  xl:gap-10 container">
          <div className="py-7">
            {/* <SideNav onClose={() => setOpenNav(false)} open={openNav} /> */}
          </div>
          <div className="w-full overflow-hidden">
            <LayoutRoot>
              <LayoutContainer>{children} </LayoutContainer>
            </LayoutRoot>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayoutDashboard;
