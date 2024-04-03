import {
	Outlet,
	createMemoryRouter,
	createBrowserRouter,
} from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import useSyncGlobalRouter from "../hooks/useSyncGlobalRouter";

const RouterHandler = () => {
	useSyncGlobalRouter();

	return <Outlet />;
};

const isDevelopment = process.env.NODE_ENV === "development";

const routes = [
	{
		path: "/",
		element: <RouterHandler />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: "pricing",
				element: <Pricing />,
			},
		],
	},
];

export const router = (initialPathname) =>
	isDevelopment
		? createBrowserRouter(routes)
		: createMemoryRouter(routes, {
				initialEntries: [initialPathname],
		  });
