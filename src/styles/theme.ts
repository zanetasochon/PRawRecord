import { createTheme } from "@mui/material/styles"; 
 
 
declare module "@mui/material/styles" { 
  interface PaletteColor { 
    main: string; 
    white?: string; 
    text?: string; 
    background?: string; 
    accent?: string; 
    shadow?: string; 
  } 
 
 
  interface PaletteColorOptions { 
    main: string; 
    white?: string; 
    text?: string; 
    background?: string; 
    accent?: string; 
    shadow?: string; 
  } 
} 
 

 
 
const theme = createTheme({ 
  palette: { 
    primary: { 
      main: "#0843C6", 
      white: "#ffffff", 
    }, 
    secondary: { 
      main: "#ADADAD", 
      text: "#000000", 
      background: "#F5F5F5", 
      accent: "#474747", 
      shadow: "#EFEFEF", 
    }, 
  }, 
  typography: { 
    htmlFontSize: 10, 
  }, 
  components: { 
    MuiAlert: { 
      styleOverrides: { 
        root: ({ ownerState }) => ({ 
          ...(ownerState.severity === "info" && { 
            backgroundColor: "#60a5fa", 
          }), 
        }), 
      }, 
    }, 
    MuiCssBaseline: { 
      styleOverrides: { 
        fontSize: "10px", 
      }, 
    }, 
  }, 
}); 
 
 
export default theme; 

 