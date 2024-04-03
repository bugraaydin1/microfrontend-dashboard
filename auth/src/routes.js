import {
	Outlet,
	createMemoryRouter,
	createBrowserRouter,
} from "react-router-dom";
import useSyncGlobalRouter from "../hooks/useSyncGlobalRouter";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const RouterHandler = () => {
	useSyncGlobalRouter();

	return <Outlet />;
};

const isDevelopment = process.env.NODE_ENV === "development";

const routes = [
	{
		path: "/auth",
		element: <RouterHandler />,
		children: [
			{
				path: "signin",
				element: <SignIn />,
			},
			{
				path: "signup",
				element: <SignUp />,
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
