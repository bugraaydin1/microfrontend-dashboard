import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useSyncGlobalRouter = (basename = "") => {
	const location = useLocation();
	const navigate = useNavigate();

	// const newPath = `${basename}${
	// 	location.pathname === "/" ? "" : location.pathname
	// }`;

	useEffect(() => {
		window.dispatchEvent(
			new CustomEvent("remoteNavigate", { detail: location.pathname }) // detail:newPath
		);

		const hostNavigated = ({ detail }) => {
			console.log(
				"Marketing received @host navigated - host:",
				detail,
				"remote:",
				location.pathname,
				"->",
				detail
			);

			if (detail !== location.pathname) {
				navigate(detail);
			}
		};

		window.addEventListener("hostNavigate", hostNavigated);

		return () => {
			window.removeEventListener("hostNavigate", hostNavigated);
		};
	}, [location, navigate]);
};

export default useSyncGlobalRouter;
