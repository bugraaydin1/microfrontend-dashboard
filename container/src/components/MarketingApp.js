import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
	const appRef = useRef();
	const location = useLocation();

	useEffect(() => {
		if (appRef.current) {
			mount(appRef.current, { initialPathname: location.pathname });
		}
	}, []);

	return <div ref={appRef} />;
};

export default MarketingApp;
