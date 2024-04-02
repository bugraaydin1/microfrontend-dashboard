import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
	Grid,
	Box,
	Container,
	Button,
	Avatar,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	CardActionArea,
	Typography,
	FormControlLabel,
	TextField,
	Checkbox,
	Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link underline="none" component={RouterLink} to="/" color="inherit">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function SignIn({ onSignIn }) {
	return (
		<Container component="main" maxWidth="xs">
			<Box mt={8} display="flex" flexDirection="column" alignItems="center">
				<Avatar m={1} sx={{ backgroundColor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box
					mt={3}
					width="100%"
					component="form"
					onSubmit={(e) => e.preventDefault()}
					noValidate
				>
					<TextField
						required
						fullWidth
						variant="outlined"
						margin="normal"
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						fullWidth
						sx={{ my: 3 }}
						type="submit"
						variant="contained"
						color="primary"
						onClick={onSignIn}
					>
						Sign In
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link underline="none" component={RouterLink} to="/auth/signup">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
}
