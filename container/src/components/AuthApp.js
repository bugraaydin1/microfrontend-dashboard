import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useHostContext } from "../../context/hostContext";
import { mount } from "auth/AuthApp";

const AuthApp = () => {
	const appRef = useRef();
	const location = useLocation();
	const { setSignedIn } = useHostContext();

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

	return <div id="auth" ref={appRef} />;
};

export default AuthApp;
