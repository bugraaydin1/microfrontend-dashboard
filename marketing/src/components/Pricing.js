import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
	Grid,
	Box,
	Container,
	Button,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	CardActionArea,
	Typography,
	CardHeader,
	Link,
} from "@mui/material";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link component={RouterLink} color="inherit" to="/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const tiers = [
	{
		title: "Free",
		price: "0",
		description: [
			"10 users included",
			"2 GB of storage",
			"Help center access",
			"Email support",
		],
		buttonText: "Sign up for free",
		buttonVariant: "outlined",
	},
	{
		title: "Pro",
		subheader: "Most popular",
		price: "15",
		description: [
			"20 users included",
			"10 GB of storage",
			"Help center access",
			"Priority email support",
		],
		buttonText: "Get started",
		buttonVariant: "contained",
	},
	{
		title: "Enterprise",
		price: "30",
		description: [
			"50 users included",
			"30 GB of storage",
			"Help center access",
			"Phone & email support",
		],
		buttonText: "Contact us",
		buttonVariant: "outlined",
	},
];

const footers = [
	{
		title: "Company",
		description: ["Team", "History", "Contact us", "Locations"],
	},
	{
		title: "Features",
		description: [
			"Cool stuff",
			"Random feature",
			"Team feature",
			"Developer stuff",
			"Another one",
		],
	},
	{
		title: "Resources",
		description: [
			"Resource",
			"Resource name",
			"Another resource",
			"Final resource",
		],
	},
	{
		title: "Legal",
		description: ["Privacy policy", "Terms of use"],
	},
];

const Pricing = () => {
	return (
		<>
			<Container sx={{ pt: 8, pb: 6 }} maxWidth="sm" component="main">
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="textPrimary"
					gutterBottom
				>
					Pricing
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color="textSecondary"
					component="p"
				>
					Quickly build an effective pricing table for your potential customers
					with this layout. It&apos;s built with default Material-UI components
					with little customization.
				</Typography>
			</Container>

			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{tiers.map((tier) => (
						<Grid
							item
							key={tier.title}
							xs={12}
							sm={tier.title === "Enterprise" ? 12 : 6}
							md={4}
						>
							<Card>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: "center" }}
									subheaderTypographyProps={{ align: "center" }}
									action={tier.title === "Pro" ? "⭐" : null}
									sx={{ backgroundColor: "lightgrey" }}
								/>
								<CardContent>
									<Box
										mb={2}
										display="flex"
										justifyContent="center"
										alignItems="baseline"
									>
										<Typography component="h2" variant="h3" color="textPrimary">
											${tier.price}
										</Typography>
										<Typography variant="h6" color="textSecondary">
											/mo
										</Typography>
									</Box>
									<ul>
										{tier.description.map((line) => (
											<Typography
												component="li"
												variant="subtitle1"
												align="center"
												key={line}
											>
												{line}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions>
									<Button
										to="/auth/signup"
										fullWidth
										color="primary"
										component={RouterLink}
									>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>

			<Container
				maxWidth="md"
				component="footer"
				sx={{ borderTop: "1px solid lightgrey", mt: 8, py: [3, 6, 6] }}
			>
				<Grid container spacing={4} justifyContent="space-evenly">
					{footers.map((footer) => (
						<Grid item xs={6} sm={3} key={footer.title}>
							<Typography variant="h6" color="textPrimary" gutterBottom>
								{footer.title}
							</Typography>
							<ul>
								{footer.description.map((item) => (
									<li key={item}>
										<Link href="#" variant="subtitle1" color="textSecondary">
											{item}
										</Link>
									</li>
								))}
							</ul>
						</Grid>
					))}
				</Grid>
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
		</>
	);
};

export default Pricing;
