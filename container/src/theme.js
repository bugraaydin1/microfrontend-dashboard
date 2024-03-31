const { createTheme } = require("@mui/material");
import { blue, orange } from "@mui/material/colors";

export const theme = createTheme({
	components: {
		MuiCssBaseline: {
			body: {
				margin: 0,
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					ul: {
						margin: 0,
						padding: 0,
						listStyle: "none",
					},
					a: {
						textDecoration: "none",
					},
				},
			},
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
