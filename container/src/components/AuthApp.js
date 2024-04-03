import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { mount } from "auth/AuthApp";

const AuthApp = () => {
	const appRef = useRef();
	const location = useLocation();

	useEffect(() => {
		if (appRef.current) {
			mount(appRef.current, { initialPathname: location.pathname });
		}
	}, []);

	return <div id="auth" ref={appRef} />;
};

export default AuthApp;
