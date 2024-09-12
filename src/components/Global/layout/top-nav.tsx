import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import { Box, Stack, SvgIcon, useMediaQuery, useTheme } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Logo from "~/images/next.svg";
import LoadingSpin from "../loading";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 73;

const TopNav = (props: { onNavOpen: () => void }) => {
  const { onNavOpen } = props;
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const DynamicIconButton = dynamic(() => import("@mui/material/IconButton"), {
    ssr: false,
  });

  return (
    <Suspense fallback={<LoadingSpin />}>
      <Box
        component="header"
        sx={{
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 6%)",
          position: "sticky",
          maxHeight: "73px",
          overflow: "hidden",
          left: {
            lg: `${SIDE_NAV_WIDTH}px`,
          },
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            {!lgUp ? (
              <DynamicIconButton onClick={onNavOpen}>
                <SvgIcon fontSize="small">
                  <Bars3Icon />
                </SvgIcon>
              </DynamicIconButton>
            ) : (
              <Box sx={{ p: 1.5 }}>
                <Link href="/">
                  <Box
                    sx={{
                      alignItems: "center",
                      borderRadius: 1,
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-center",
                      gap: 2,
                    }}
                  >
                    <Image
                      src={Logo}
                      alt="Site Logo"
                      className="rounded-lg"
                      width={300}
                      height={300}
                    />
                  </Box>
                </Link>
              </Box>
            )}
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}></Stack>
        </Stack>
      </Box>
    </Suspense>
  );
};
export default TopNav;
