import React, { useEffect, useRef } from "react";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
	const appRef = useRef();

	useEffect(() => {
		if (appRef.current) {
			mount(appRef.current);
		}
	}, []);

	return <div ref={appRef} />;
};

export default MarketingApp;
