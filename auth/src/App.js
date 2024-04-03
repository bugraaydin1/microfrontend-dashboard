import React from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { router } from "./routes";
import { theme } from "./theme";

export default function App({ initialPathname }) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={router(initialPathname)} />
		</ThemeProvider>
	);
}
