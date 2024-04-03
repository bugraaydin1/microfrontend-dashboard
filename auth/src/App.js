import React from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { getRouter } from "./routes";
import { theme } from "./theme";

export default function App(props) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={getRouter(props)} />
		</ThemeProvider>
	);
}
