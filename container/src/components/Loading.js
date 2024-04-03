import { Box, CircularProgress, LinearProgress } from "@mui/material";

export default function Loading() {
	return (
		<Box display="flex" justifyContent="center">
			<LinearProgress sx={{ width: "100%" }} />
			{/* <CircularProgress size={40} /> */}
		</Box>
	);
}
