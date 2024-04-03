import {
	Outlet,
	createMemoryRouter,
	createBrowserRouter,
	useRouteError,
	redirect,
} from "react-router-dom";
import useSyncGlobalRouter from "../hooks/useSyncGlobalRouter";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const RouterHandler = () => {
	useSyncGlobalRouter();

	return <Outlet />;
};

const isDevelopment = process.env.NODE_ENV === "development";

const getRoutes = (onSignIn) => [
	{
		path: "/auth",
		element: <RouterHandler />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: "signin",
				element: <SignIn onSignIn={onSignIn} />,
			},
			{
				path: "signup",
				element: <SignUp onSignIn={onSignIn} />,
			},
		],
	},
];

function ErrorBoundary() {
	const error = useRouteError();
	console.error(error);

	return <div>Page not found!</div>;
}

export const getRouter = ({ initialPathname, onSignIn }) =>
	isDevelopment
		? createBrowserRouter(getRoutes(onSignIn))
		: createMemoryRouter(getRoutes(onSignIn), {
				initialEntries: [initialPathname],
		  });
