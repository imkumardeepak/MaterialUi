import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#651fff',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
