import {
	BrowserRouter,
	Route,
	Routes,
	createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <MarketingApp />,
			},
			{
				path: "pricing",
				element: <MarketingApp />,
			},
		],
	},
]);
