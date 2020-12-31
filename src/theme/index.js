import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.indigo['A400']
      },
      secondary: {
        main: colors.orange['A700']
      }
    },
    typography: {
      h6: {
        fontSize: 14,
        fontWeight: 500
      },
      h1: {
        fontSize: 22,
        fontWeight: 500
      },
      h2: {
        fontSize: 20,
        fontWeight: 500
      },
    }
});


export default theme;