import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

type Props = {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

export default function NavBar({ darkMode, toggleDarkMode }: Props) {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#6400b1", // Purple color
        boxShadow: "none", // Optional: Removes shadow for a flat look
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Section: Brand Name */}
        <Typography variant="h5" sx={{ fontWeight: "bold", letterSpacing: 2 }}>
          W-STORE
        </Typography>

        {/* Center Section: Navigation Buttons (Optional) */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Shop</Button>
          <Button color="inherit">About</Button>
        </Box>

        {/* Right Section: Dark Mode Toggle Button */}
        <IconButton onClick={toggleDarkMode} sx={{ color: "white" }}>
          {darkMode ? (
            <DarkMode fontSize="medium" />
          ) : (
            <LightMode fontSize="medium" />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
