import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { HostProvider } from "../context/hostContext";
import { router } from "./routes";
import { theme } from "./theme";

const App = () => {
	return (
		<HostProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<RouterProvider router={router} />
			</ThemeProvider>
		</HostProvider>
	);
};

export default App;
