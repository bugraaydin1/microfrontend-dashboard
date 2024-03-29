import { createBrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Landing />,
	},
	{
		path: "/pricing",
		element: <Pricing />,
	},
]);
