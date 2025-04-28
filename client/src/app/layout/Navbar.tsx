import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  List,
  ListItem,
  Badge,
  Menu,
  MenuItem,
  LinearProgress,
} from "@mui/material";
import {
  DarkMode,
  LightMode,
  ShoppingCart,
  AccountCircle,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { IoLogoWordpress } from "react-icons/io5";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setDarkMode } from "./uiSlice";

const midLinks = [
  { title: "Catalog", path: "/catalog" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "#bfb3fe",
  },
};

export default function NavBar() {
  const dispatch = useAppDispatch();
  const { isLoading, darkMode } = useAppSelector((state) => state.ui);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#6400b1",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <IconButton component={NavLink} to="/" sx={{ color: "inherit" }}>
            <IoLogoWordpress size={36} />
          </IconButton>
        </Box>

        {/* Middle links */}
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title}
            </ListItem>
          ))}
        </List>

        {/* Right side */}
        <Box display="flex" alignItems="center">
          {/* Cart */}
          <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent="4" color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>

          {/* Dark Mode Toggle */}
          <IconButton onClick={() => dispatch(setDarkMode())}>
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
          </IconButton>

          {/* Account Dropdown */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleMenuOpen}
          >
            <AccountCircle />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem component={NavLink} to="/login" onClick={handleMenuClose}>
              Login
            </MenuItem>
            <MenuItem
              component={NavLink}
              to="/register"
              onClick={handleMenuClose}
            >
              Register
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>

      {/* Loading bar */}
      {isLoading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="secondary" />
        </Box>
      )}
    </AppBar>
  );
}
