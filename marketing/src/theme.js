const { createTheme } = require("@mui/material");
import { blue, orange } from "@mui/material/colors";

export const theme = createTheme({
	palette: {
		primary: {
			main: blue[500],
		},
		secondary: {
			main: orange[500],
		},
	},
});
