import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

export const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <MarketingApp />,
			},
		],
	},
]);
