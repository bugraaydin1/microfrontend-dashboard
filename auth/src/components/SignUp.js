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
	FormControlLabel,
	Typography,
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

export default function SignUp({ onSignIn }) {
	return (
		<Container component="main" maxWidth="xs">
			<Box mt={8} display="flex" flexDirection="column" alignItems="center">
				<Avatar m={1} sx={{ backgroundColor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Signup
				</Typography>
				<Box
					mt={3}
					width="100%"
					component="form"
					onSubmit={(e) => e.preventDefault()}
					noValidate
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="fname"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="lname"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid>
					</Grid>
					<Button
						fullWidth
						sx={{ my: 3 }}
						type="submit"
						variant="contained"
						color="primary"
						onClick={onSignIn}
					>
						Sign Up
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link underline="none" component={RouterLink} to="/auth/signin">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
