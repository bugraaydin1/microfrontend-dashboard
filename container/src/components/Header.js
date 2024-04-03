import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useHostContext } from "../../context/hostContext";

const Header = () => {
	const { signedIn, setSignedIn } = useHostContext();

	console.log("header ctx:", signedIn);

	const onClick = () => {
		if (signedIn) {
			setSignedIn(false);
		}
	};

	return (
		<AppBar
			elevation={0}
			position="static"
			color="transparent"
			sx={{ borderBottom: `1px solid lightgrey` }}
		>
			<Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
				<Typography
					noWrap
					variant="h6"
					color="inherit"
					component={RouterLink}
					to="/"
				>
					Dashboard App
				</Typography>
				<Button
					color="primary"
					variant="outlined"
					component={RouterLink}
					to={signedIn ? "/" : "/auth/signin"}
					onClick={onClick}
					sx={{ my: 1, mx: 1.5 }}
				>
					{signedIn ? "Logout" : "Login"}
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
