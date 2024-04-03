import React, { createContext, useContext, useState } from "react";

const HostContext = createContext();

const HostProvider = ({ children }) => {
	const [signedIn, setSignedIn] = useState(false);

	return (
		<HostContext.Provider value={{ signedIn, setSignedIn }}>
			{children}
		</HostContext.Provider>
	);
};

const useHostContext = () => {
	const context = useContext(HostContext);
	if (context === undefined) {
		throw new Error("useHostContext must be used within a HostProvider");
	}
	return context;
};

export { HostProvider, HostContext, useHostContext };
