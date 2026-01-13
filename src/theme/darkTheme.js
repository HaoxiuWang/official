import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#64ffda' }, // Cyan-Green
    background: { default: '#020c1b', paper: '#0a192f' },
    text: { primary: '#ccd6f6', secondary: '#8892b0' },
  },
  typography: {
    fontFamily: '"Inter", "Fira Code", monospace',
    h3: { fontWeight: 700, letterSpacing: '-1px' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: '4px', textTransform: 'none', fontWeight: 600 },
      },
    },
  },
});

export default theme;