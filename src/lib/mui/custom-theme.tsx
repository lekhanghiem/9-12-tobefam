import { createMuiTheme, createTheme } from "@mui/material";

export const ThemeMdx = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        // Name of the slot
        root: {
          color: "#FFFFFF",
          backgroundColor: "transparent",
          fontSize: "1rem",
          outline: "none",
          boxShadow: "none",
          padding: "0 0",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#FFFFFF !important",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          padding: "0 0 !important",
        },
      },
    },
  },
});
export const CopyField = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#FFFFFF !important",
        },
      },
    },
  },
});

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#F40074",
    },
    text: {
      primary: "#ffffff",
    },
    // action: {
    //   active: "#F40074",
    // },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#FFFFFF !important",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F40074",
    },
    background: {
      paper: "rgb(166 6 152) ",
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#F40074 !important",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #ecbeeb",
        },
      },
    },
  },
});

export const themeTable = createMuiTheme({
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent !important",
        },
      },
    },
  },
});
