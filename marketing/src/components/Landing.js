import React from "react";
import { Link as RouterLink } from "react-router-dom";

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
	Link,
} from "@mui/material";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link component={RouterLink} to="/" color="inherit">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Landing() {
	return (
		<>
			<main>
				<Box pt={8} pb={6}>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom
						>
							Home Page
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="textSecondary"
							paragraph
						>
							Something short and leading about the collection below—its
							contents, the creator, etc. Make it short and sweet, but not too
							short so folks don&apos;t simply skip over it entirely.
						</Typography>
						<Box mt={4}>
							<Grid container spacing={2} justifyContent="center">
								<Grid item>
									<Link component={RouterLink} to="/pricing">
										<Button variant="contained" color="primary">
											Pricing
										</Button>
									</Link>
								</Grid>
								<Grid item>
									<Link component={RouterLink} to="/pricing">
										<Button variant="outlined" color="primary">
											Pricing
										</Button>
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Container>
				</Box>
				<Container py={8} maxWidth="md">
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card
									sx={{
										display: "flex",
										flexDirection: "column",
										height: "100%",
									}}
								>
									<CardMedia
										key={card}
										sx={{ pt: "56.25%" }}
										title="Image title"
										image={`https://source.unsplash.com/random?sig=${card}`}
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography gutterBottom variant="h5" component="h2">
											Heading
										</Typography>
										<Typography>
											This is a media card. You can use this section to describe
											the content.
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" color="primary">
											View
										</Button>
										<Button size="small" color="primary">
											Edit
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>

			<footer style={{ padding: "4em" }}>
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="textSecondary"
					component="p"
				>
					Something here to give the footer a purpose!
				</Typography>
				<Copyright />
			</footer>
		</>
	);
}
