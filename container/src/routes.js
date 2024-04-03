import {
	BrowserRouter,
	Route,
	Routes,
	createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import AuthApp from "./components/AuthApp";

export const router = createBrowserRouter([
	{
		path: "/auth",
		element: <AppLayout />,
		children: [
			{
				path: "*",
				element: <AuthApp />,
			},
		],
	},
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <MarketingApp />,
			},
			{
				/* index: true, */
				path: "*",
				element: <MarketingApp />,
			},
			/* {
				path: "pricing",
				element: <MarketingApp />,
			}, */
		],
	},
]);
