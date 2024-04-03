import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useHostContext } from "../../context/hostContext";
import { mount } from "auth/AuthApp";

const AuthApp = () => {
	const appRef = useRef();
	const location = useLocation();
	const navigate = useNavigate();
	const { signedIn, setSignedIn } = useHostContext();

	useEffect(() => {
		if (signedIn) {
			navigate({ pathname: "/dashboard" });
		}
	}, [signedIn]);

	useEffect(() => {
		if (appRef.current) {
			mount(appRef.current, {
				initialPathname: location.pathname,
				onSignIn: () => {
					setSignedIn(true);
				},
			});
		}
	}, []);

	return <div ref={appRef} />;
};

export default AuthApp;
