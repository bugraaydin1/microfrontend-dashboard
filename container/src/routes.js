import { Suspense, lazy } from "react";
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	createBrowserRouter,
	useRouteError,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Loading from "./components/Loading";
import ProtectedRoute from "./components/ProtectedRoute";

const AuthApp = lazy(() => import("./components/AuthApp"));
const MarketingApp = lazy(() => import("./components/MarketingApp"));
const DashboardApp = lazy(() => import("./components/DashboardApp"));

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
		path: "/dashboard",
		element: <ProtectedRoute />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: "*?",
				element: (
					<Suspense fallback={<Loading />}>
						<DashboardApp />
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
				path: "*?",
				element: (
					<Suspense fallback={<Loading />}>
						<MarketingApp />
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
