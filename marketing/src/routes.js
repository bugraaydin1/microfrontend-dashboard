import {
	Outlet,
	createMemoryRouter,
	createBrowserRouter,
	useRouteError,
	redirect,
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
		errorElement: <ErrorBoundary />,
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

function ErrorBoundary() {
	let {
		error: { message },
	} = useRouteError();
	console.error(message);

	const redirectUrl = message.match(/"(.*)"/)?.[1];

	redirect(redirectUrl);
	// Uncaught ReferenceError: path is not defined
	return <div>Page not found!</div>;
}

export const router = (initialPathname) =>
	isDevelopment
		? createBrowserRouter(routes)
		: createMemoryRouter(routes, {
				initialEntries: [initialPathname],
		  });
