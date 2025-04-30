import { SearchOff } from "@mui/icons-material";
import { Button, Paper, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          height: 400,
          width: 800,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 6,
        }}
      >
        <SearchOff sx={{ fontSize: 70 }} color="primary" />
        <Typography gutterBottom variant="h5">
          Oops - we could not find what you were looking for
        </Typography>
        <Button
          fullWidth
          component={Link}
          to="/catalog"
          color="error"
          sx={{ mt: 4 }}
        >
          Go back to shop
        </Button>
      </Paper>
    </Box>
  );
}
