import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
	const appRef = useRef();
	const navigate = useNavigate();
	const location = useLocation();

	console.log("inApp host path:", location.pathname);

	// useLocationListener({ onRoute: hostNavigateRef.current });

	useEffect(() => {
		if (appRef.current) {
			mount(appRef.current);
		}
	}, []);

	return <div ref={appRef} />;
};

export default MarketingApp;
