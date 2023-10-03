import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  "colorSchemes": {
    "light": {
      "palette": {
        "primary": {
          "50": '#FBE9E8',  // Lightest tint
          "100": '#F8D2CF',
          "200": '#F5B9B4',
          "300": '#F29F99',
          "400": '#EF857E',
          "500": '#D5473F',  // Base color
          "600": '#B93D35',
          "700": '#9D332B',
          "800": '#812921',
          "900": '#651F17'   // Darkest shade
        },
        "warning": {
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae6fd",
          "300": "#7dd3fc",
          "400": "#38bdf8",
          "500": "#0ea5e9",
          "600": "#0284c7",
          "700": "#0369a1",
          "800": "#075985",
          "900": "#0c4a6e"
        },
        "background": {
          "default": "#ffffff", // This sets the default background color for light mode
          "paper": "#f5f5f5"   // This sets the background color for components in light mode
        },
      }
    },
    "dark": {
      "palette": {
        "primary": {
          "50": '#FBE9E8',  // Lightest tint
          "100": '#F8D2CF',
          "200": '#F5B9B4',
          "300": '#F29F99',
          "400": '#EF857E',
          "500": '#D5473F',  // Base color
          "600": '#B93D35',
          "700": '#9D332B',
          "800": '#812921',
          "900": '#651F17'   // Darkest shade
        },
        "warning": {
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae6fd",
          "300": "#7dd3fc",
          "400": "#38bdf8",
          "500": "#0ea5e9",
          "600": "#0284c7",
          "700": "#0369a1",
          "800": "#075985",
          "900": "#0c4a6e"
        }
        ,
        "background": {
          "default": "#121212", // This sets the default background color for dark mode
          "paper": "#1e1e1e"   // This sets the background color for components in dark mode
        },
      }
    }
  }
});

export default theme;
