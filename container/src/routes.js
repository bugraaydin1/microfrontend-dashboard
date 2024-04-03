import {
	BrowserRouter,
	Route,
	Routes,
	createBrowserRouter,
	useRouteError,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import AuthApp from "./components/AuthApp";

export const router = createBrowserRouter([
	{
		path: "/auth",
		element: <AppLayout />,
		errorElement: <ErrorBoundary />,
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
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <MarketingApp />,
			},
			{
				path: "*",
				element: <MarketingApp />,
			},
		],
	},
]);

function ErrorBoundary() {
	const error = useRouteError();
	console.error(message);

	return <div>Page not found!</div>;
}
