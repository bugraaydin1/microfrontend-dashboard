import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header = ({ signedIn, onSignOut = () => {} }) => {
	const onClick = () => {
		if (signedIn) {
			onSignOut();
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
