import { Box, ButtonBase } from "@mui/material";
import NextLink from "next/link";

export const SideNavItem = (props: any) => {
  const { active = false, icon, path, title } = props;
  return (
    <li>
      <NextLink href={path} passHref={true}>
        <ButtonBase
          component="div"
          sx={{
            alignItems: "center",
            borderRadius: 2.5,
            display: "flex",
            justifyContent: "flex-start",
            pl: "16px",
            pr: "16px",
            py: "14px",
            color: "#2f2b3de0",
            textAlign: "left",
            transition: "all",
            transitionDuration: "300ms",
            width: "100%",
            ...(active && {
              background:
                "linear-gradient(90deg, rgba(130, 5, 255, 0.7) 0%, rgba(253, 0, 91, 0.7) 100%)",
            }),
            "&:hover": {
              background:
                "linear-gradient(90deg, rgba(130, 5, 255, 0.7) 0%, rgba(253, 0, 91, 0.7) 100%)",
              color: "#ffffff !important",
            },
          }}
        >
          {icon && (
            <Box
              component="span"
              sx={{
                alignItems: "center",
                display: "inline-flex",
                justifyContent: "center",
                mr: 2,
                ...(active && {
                  color: "#ffffff",
                }),
              }}
            >
              {icon}
            </Box>
          )}
          <Box
            component="span"
            sx={{
              flexGrow: 1,
              fontFamily: (theme) => theme.typography.fontFamily,
              fontSize: 18,
              fontWeight: 600,
              lineHeight: "24px",
              whiteSpace: "nowrap",
              ...(active && {
                color: "#ffffff",
              }),
            }}
          >
            {title}
          </Box>
        </ButtonBase>
      </NextLink>
    </li>
  );
};
