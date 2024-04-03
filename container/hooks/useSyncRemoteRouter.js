import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useSyncRemoteRouter = (basename = "") => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		window.dispatchEvent(
			new CustomEvent("hostNavigate", { detail: location.pathname })
		);

		const remoteNavigated = ({ detail }) => {
			console.log(
				"remote navigated - host:",
				location.pathname,
				"remote:",
				detail,
				"->",
				detail
			);
			if (detail !== location.pathname) {
				navigate(detail);
			}
		};

		window.addEventListener("remoteNavigate", remoteNavigated);

		return () => {
			window.removeEventListener("remoteNavigate", remoteNavigated);
		};
	}, [location, navigate]);

	/* useEffect(() => {
		if (location.pathname.startsWith(basename)) {
			console.log(
				"sync remote router:",
				location.pathname.replace(basename, "")
			);
			window.dispatchEvent(
				new CustomEvent("hostNavigate", {
					detail: location.pathname.replace(basename, ""),
				})
			);
		}
	}, [location, basename]); */
};

export default useSyncRemoteRouter;
