import React from "react";
import { RouterProvider } from "react-router-dom";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { router } from "./routes";
import { theme } from "./theme";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}
