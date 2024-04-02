import useSyncRemoteRouter from "../../hooks/useSyncRemoteRouter";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
	useSyncRemoteRouter({ basename: "/" });

	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
