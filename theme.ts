import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  colors: {
    primary: {
      100: "#cfcfd6",
      200: "#9f9fae",
      300: "#6f6f85",
      400: "#3e3f5d",
      500: "#0F1035",
      600: "#0c0c2a",
      700: "#09091f",
      800: "#060615",
      900: "#03030a",
    },
    secondary: {
      100: "#d6dce6",
      200: "#aebace",
      300: "#8698b6",
      400: "#5e769e",
      500: "#365486",
      600: "#2b436b",
      700: "#203250",
      800: "#152135",
      900: "#0a101a",
    },
    dominant: {
      100: "#e5f3f7",
      200: "#cbe8ef",
      300: "#b2dde8",
      400: "#98d2e0",
      500: "#7FC7D9",
      600: "#659fad",
      700: "#4c7782",
      800: "#324f56",
      900: "#19272b",
    },
    base: {
      100: "#f8fcfc",
      200: "#f1f9f9",
      300: "#eaf7f6",
      400: "#e3f4f3",
      500: "#DCF2F1",
      600: "#b0c1c0",
      700: "#849190",
      800: "#586060",
      900: "#2c3030",
    },
  },
  colorful: {
    tabs:{
      tab: {
        border: '2px solid',
        borderColor: 'transparent',
        // use colorScheme to change background color with dark and light mode options
        bg: null,
        borderTopRadius: 'lg',
        borderBottom: 'none',
        _selected: {
          bg: null,
          color: 'white',
          borderColor: 'inherit',
          borderBottom: '1px',
          mb: '-2px',
        },
      },
      tablist: {
        borderBottom: '2x solid',
        borderColor: 'inherit',
      },
      tabpanel: {
        border: '2px solid',
        borderColor: 'inherit',
        borderBottomRadius: 'lg',
        borderTopRightRadius: 'lg',
      },
  
    }
  },
  
});

export default theme;
