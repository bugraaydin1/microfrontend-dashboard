import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const mount = (element, { initialPathname }) => {
	const root = createRoot(element);

	root.render(<App initialPathname={initialPathname} />);
};

if (process.env.NODE_ENV === "development") {
	const element = document.getElementById("_marketing-dev-root");
	if (element) {
		mount(element, {});
	}
}

export { mount };
