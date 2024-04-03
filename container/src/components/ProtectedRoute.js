import { Navigate, Outlet } from "react-router-dom";
import { useHostContext } from "../../context/hostContext";
import AppLayout from "../layouts/AppLayout";

export default function ProtectedRoute() {
	const { signedIn } = useHostContext();

	console.log({ signedIn });

	return signedIn ? <AppLayout /> : <Navigate to="/" />;
}
