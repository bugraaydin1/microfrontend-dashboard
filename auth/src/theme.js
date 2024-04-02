const { createTheme } = require("@mui/material");
import { blue, orange } from "@mui/material/colors";

export const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: (themeParam) => `
			a {
				text-decoration: none;
			}
		  `,
		},
	},
	palette: {
		primary: {
			main: blue[500],
		},
		secondary: {
			main: orange[500],
		},
	},
});
