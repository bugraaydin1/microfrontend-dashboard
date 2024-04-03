import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const mount = (element, { ...props }) => {
	const root = createRoot(element);

	root.render(<App {...props} />);
};

if (process.env.NODE_ENV === "development") {
	const element = document.getElementById("_auth-dev-root");
	if (element) {
		mount(element, {});
	}
}

export { mount };
