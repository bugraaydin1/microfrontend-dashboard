import { useEffect, useRef } from "react";
import { mount } from "dashboard/DashboardApp";

const DashboardApp = () => {
	const appRef = useRef();

	useEffect(() => {
		if (appRef.current) {
			mount(appRef.current);
		}
	}, []);

	return <div ref={appRef} />;
};

export default DashboardApp;
