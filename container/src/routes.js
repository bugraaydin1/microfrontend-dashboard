import { Suspense, lazy } from "react";
import {
	BrowserRouter,
	Route,
	Routes,
	createBrowserRouter,
	useRouteError,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Header from "./components/Header";
import Loading from "./components/Loading";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
("./components/MarketingApp");
const AuthApp = lazy(() => import("./components/AuthApp"));
("./components/AuthApp");

export const router = createBrowserRouter([
	{
		path: "/auth",
		element: <AppLayout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: "*",
				element: (
					<Suspense fallback={<Loading />}>
						<AuthApp />
					</Suspense>
				),
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
				element: (
					<Suspense fallback={<Loading />}>
						<MarketingApp />,
					</Suspense>
				),
			},
			{
				path: "*",
				element: (
					<Suspense fallback={<Loading />}>
						<MarketingApp />,
					</Suspense>
				),
			},
		],
	},
]);

function ErrorBoundary() {
	const error = useRouteError();
	console.error(error);

	return <div>Page not found!</div>;
}
